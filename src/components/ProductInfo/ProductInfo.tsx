"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import ProductInfoAddToCart from "./ProductInfoAddToCart";
import { Product } from "@/interfaces/products";

interface ProductInfoProps {
  product: Product;
}
const ProductInfo = ({ product }: ProductInfoProps) => {
  return (
    <Box
      component={"section"}
      sx={{
        display: "flex",
        flexDirection: {
          xs: "column",
          sm: "row",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          padding: "1rem",
          flexGrow: 1,
        }}
      >
        <Typography variant="h5" component="h1">
          {product.title}
        </Typography>

        <Typography
          variant="h6"
          component="h2"
          sx={{
            fontSize: "0.75rem",
          }}
        >
          {product.description}
        </Typography>
      </Box>

      <Box
        sx={{
          borderTop: {
            xs: "1px solid white",
            sm: "unset",
          },
          borderLeft: {
            xs: "unset",
            sm: "1px solid white",
          },
          padding: "1rem",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <Typography
          variant="h5"
          component="h3"
          sx={{
            fontSize: "1.25rem",
          }}
        >
          € {product.price}
        </Typography>

        <Rating readOnly value={product.rating} precision={0.01}></Rating>

        <ProductInfoAddToCart product={product} />
      </Box>
    </Box>
  );
};

export default ProductInfo;
