import { Product } from "@/interfaces/products";

// Error handling is delegated to consumer
export const getProducts = async (page: number = 1, size: number = 10): Promise<Product[]> => {
  let endpoint = "https://dummyjson.com/products";

  if (page && size) {
    endpoint += `?limit=${size}&skip=${(page - 1) * size}`;
  }

  const response = await fetch(endpoint, {
    cache: "no-store",
  });

  const json = await response.json();
  const products: Product[] = json.products;
  return products;
};

export const getProductDetail = async (productId?: string): Promise<Product> => {
  if (!productId) {
    throw new Error("missing product id");
  }
  const response = await fetch(`https://dummyjson.com/products/${productId}`);
  const product: Product = await response.json();
  return product;
};
