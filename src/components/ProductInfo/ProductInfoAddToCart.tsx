"use client";

import { MouseEvent, useMemo } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import Icon from "@mui/material/Icon";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import { Product } from "@/interfaces/products";
import { addProductToCart, removeProductFromCart } from "@/utils/cart";
import { useCartContext, useCartDispatcherContext } from "../UserCartProvider/UserCartProvider";

interface ProductInfoAddToCartProps {
  product: Product;
}
const ProductInfoAddToCart = ({ product }: ProductInfoAddToCartProps) => {
  const cart = useCartContext();
  const setCart = useCartDispatcherContext();

  const handleRemoveFromCartButtonClick = async (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    let freshCart;
    try {
      if (cart) {
        freshCart = await removeProductFromCart(cart.products, product, cart.id);
      } else {
        throw new Error("no cart found");
      }
      setCart(freshCart);
    } catch (e) {
      console.error("Alert", e);
    }
  };

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

  if (productInCart) {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "0.25rem",
        }}
      >
        <Typography
          sx={{
            fontSize: "0.825rem",
            textTransform: "unset",
          }}
        >
          Add to cart
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "start",
            gap: "0.75rem",
          }}
        >
          <Button
            sx={{
              color: "white",
              lineHeight: 1,
              padding: "0rem",
              minWidth: "unset",
            }}
            onClick={handleRemoveFromCartButtonClick}
          >
            <Icon>
              <RemoveCircleOutlineIcon
                sx={{
                  width: "1rem",
                }}
              />
            </Icon>
          </Button>
          <Typography>{productInCart.quantity}</Typography>
          <Button
            sx={{
              color: "white",
              lineHeight: 1,
              padding: "0rem",
              minWidth: "unset",
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
          </Button>
        </Box>
      </Box>
    );
  }

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
