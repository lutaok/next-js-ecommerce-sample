import { CartResponse, ProductInCart, UserCart, UserCartResponse } from "@/interfaces/cart";
import { Product } from "@/interfaces/products";

// DON'T USE IT IN PRODUCTION
// In enterprise apps you would have secure and httpOnly cookies
// with a signed JWT token inside
// in order to communicate with the server and identify yourself
// For the sake of simplicity let's assume our user has an ID of 3
const USER_ID = 5;

export const getUserCart = async (): Promise<UserCart | null> => {
  let cart: UserCart | null = null;
  try {
    const cartResponse = await fetch(`https://dummyjson.com/carts/user/${USER_ID}`);
    const cartJson = (await cartResponse.json()) as UserCartResponse;
    cart = mapCartResponseIntoCart(cartJson);
  } catch (e) {
    console.error(e);
  }
  return cart;
};

// Error handling delegating to consumer
// We pass back current products since dummyjson doesn't update products on server
// This design wouldn't be present in enterprise apps
export const addProductToCart = async (
  products: ProductInCart[],
  product: Product,
  cartId: string,
): Promise<UserCart> => {
  const productsOccurences = buildProductOccurrences(products, product);

  // Update with current product
  if (productsOccurences[product.id]) {
    productsOccurences[product.id] += 1;
  } else {
    productsOccurences[product.id] = 1;
  }

  return await sendCartUpdate(productsOccurences, cartId);
};

export const removeProductFromCart = async (
  products: ProductInCart[],
  product: Product,
  cartId: string,
): Promise<UserCart> => {
  const productsOccurences = buildProductOccurrences(products, product);

  // Update with current product
  if (productsOccurences[product.id]) {
    productsOccurences[product.id] -= 1;
  }

  return await sendCartUpdate(productsOccurences, cartId);
};

// Error delegated to consumer
const sendCartUpdate = async (occurrences: Record<string, number>, cartId: string): Promise<UserCart> => {
  // Map object to request body
  const productsToSend = Object.entries(occurrences)
    .filter(([_, val]) => val > 0)
    .map(([key, val]) => ({ id: key, quantity: val }));
  const response = await fetch(`https://dummyjson.com/carts/${cartId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      products: productsToSend,
    }),
  });

  const cartJson = (await response.json()) as CartResponse;

  const cart: UserCart = {
    id: cartJson.id,
    products: cartJson.products,
    totalPrice: cartJson.total,
    total: cartJson.totalProducts,
    totalQuantity: cartJson.totalQuantity,
  };

  return cart;
};

export const mapCartResponseIntoCart = (response: UserCartResponse): UserCart | null => {
  let userCart: UserCart | null = null;
  const responseCart = response?.carts[0];
  if (responseCart?.products) {
    userCart = {
      id: responseCart.id,
      products: responseCart.products,
      totalPrice: responseCart.total,
      total: responseCart.totalProducts,
      totalQuantity: responseCart.totalQuantity,
    };
  }

  return userCart;
};

const buildProductOccurrences = (cartProducts: ProductInCart[], product: Product): Record<string, number> => {
  const productsOccurences: { [x: string]: number } = {};
  // Count occurrences
  cartProducts.reduce((acc, curr) => {
    if (acc[curr.id]) {
      acc[curr.id] += 1;
      return acc;
    }

    acc[curr.id] = curr.quantity;
    return acc;
  }, productsOccurences);

  return productsOccurences;
};
