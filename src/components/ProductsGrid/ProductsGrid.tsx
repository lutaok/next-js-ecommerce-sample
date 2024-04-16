"use client";

import { useState } from "react";

import ImageList from "@mui/material/ImageList";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import { useScreenMatcher } from "@/hooks/useScreenMatcher";
import { Product } from "@/interfaces/products";
import { getProducts } from "@/utils/products";
import ProductCard from "./ProductCard";

interface ProductsProps {
  products: Product[];
}

const ProductsGrid = ({ products }: ProductsProps) => {
  // TODO: Could resolve flashing by estimating client width on server-side based on device type
  const { smMatch, mdMatch, lgMatch } = useScreenMatcher();

  const [currentProducts, setCurrentProducts] = useState<Product[]>(products);
  const [currentPage, setCurrentPage] = useState<number>(1);

  let imageListCols = 1;
  if (smMatch) {
    imageListCols = 2;
  }
  if (mdMatch) {
    imageListCols = 3;
  }
  if (lgMatch) {
    imageListCols = 4;
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyItems: "center",
      }}
    >
      <ImageList cols={imageListCols} gap={16} aria-live="polite">
        {currentProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ImageList>
      <Button
        onClick={async () => {
          // TODO: Optimize load more
          try {
            const products = await getProducts(currentPage + 1, 10);
            setCurrentPage((prev) => prev + 1);
            setCurrentProducts((prev) => [...prev, ...products]);
          } catch (e) {
            console.error(e);
          }
        }}
      >
        Load More
      </Button>
    </Box>
  );
};

export default ProductsGrid;
