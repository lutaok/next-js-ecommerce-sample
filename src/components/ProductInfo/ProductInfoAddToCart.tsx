"use client";

import { MouseEvent } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Icon from "@mui/material/Icon";
import Button from "@mui/material/Button";
import { Product } from "@/interfaces/products";
import { useCartContext, useCartDispatcherContext } from "../UserCartProvider/UserCartProvider";
import { addProductToCart } from "@/utils/cart";

interface ProductInfoAddToCartProps {
  product: Product;
}
const ProductInfoAddToCart = ({ product }: ProductInfoAddToCartProps) => {
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

  return (
    <Button
      sx={{
        justifyContent: "start",
        color: "white",
        lineHeight: 1,
        gap: "0.25rem",
        padding: "0rem",
        whiteSpace: "nowrap",
        fontSize: "0.625rem",
        textTransform: "unset",
      }}
      onClick={handleAddToCartButtonClick}
    >
      <Icon>
        <AddCircleOutlineIcon
          sx={{
            width: "1rem",
          }}
        />
      </Icon>
      Add to cart
    </Button>
  );
};

export default ProductInfoAddToCart;
