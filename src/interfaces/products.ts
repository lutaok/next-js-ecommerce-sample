export interface Product {
  id: number;
  title: string;
  description: string;
  price: number; // float
  discountPercentage: number; // float
  rating: number; // float
  stock: number; // int
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}
