"use client";

import { MouseEvent, useMemo } from "react";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Product } from "@/interfaces/products";
import { useCartContext, useCartDispatcherContext } from "../UserCartProvider/UserCartProvider";
import { addProductToCart } from "@/utils/cart";

interface ProductAddToCartProps {
  product: Product;
}
const ProductAddToCart = ({ product }: ProductAddToCartProps) => {
  const cart = useCartContext();
  const setCart = useCartDispatcherContext();

  const handleAddToCartButtonClick = async (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    let freshCart;
    try {
      if (cart) {
        freshCart = await addProductToCart(cart.products, product, cart.id);
      } else {
        throw new Error("no cart found");
      }
      setCart(freshCart);
    } catch (e) {
      console.error("Alert", e);
    }
  };

  const productInCart = useMemo(() => cart?.products.find((item) => item.id === product.id), [cart, product]);

  return (
    <IconButton
      sx={{
        color: "white",
        fontSize: "0.75rem",
      }}
      onClick={handleAddToCartButtonClick}
      aria-label={`add ${product.title} to shopping cart`}
    >
      <AddCircleOutlineIcon />

      {productInCart && productInCart.quantity ? (
        <Typography component="span">{productInCart.quantity}</Typography>
      ) : null}
    </IconButton>
  );
};

export default ProductAddToCart;
