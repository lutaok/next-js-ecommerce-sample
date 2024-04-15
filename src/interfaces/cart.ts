import { Product } from "./products";

export interface CartResponse {
  id: string;
  products: ProductInCart[];
  total: number;
  totalProducts: number;
  totalQuantity: number;
  userId: string;
}

export interface UserCartResponse {
  carts: CartResponse[];
}

export interface UserCart {
  id: string;
  products: ProductInCart[];
  totalPrice: number;
  total: number;
  totalQuantity: number;
}

export interface ProductInCart extends Product {
  quantity: number;
}
