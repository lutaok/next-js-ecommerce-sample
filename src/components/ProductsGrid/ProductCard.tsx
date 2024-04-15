import Image from "next/image";

import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";

import { Product } from "@/interfaces/products";
import Link from "next/link";
import ProductAddToCart from "./ProductAddToCart";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <ImageListItem
      sx={{
        width: "220px",
      }}
    >
      <Link href={`/product/${product.id}`}>
        <Image
          src={product.thumbnail}
          alt={product.title}
          width={220}
          height={280}
          priority
          style={{
            objectFit: "cover",
            borderRadius: "0.5rem",
          }}
        />
      </Link>
      <ImageListItemBar
        position="below"
        title={product.title}
        subtitle={`€ ${product.price}`}
        sx={{
          alignItems: "end",
        }}
        actionIcon={<ProductAddToCart product={product} />}
      />
    </ImageListItem>
  );
};

export default ProductCard;
