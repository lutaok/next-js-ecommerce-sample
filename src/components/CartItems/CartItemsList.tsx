"use client";

import Typography from "@mui/material/Typography";
import { useCartContext } from "../UserCartProvider/UserCartProvider";
import CartItem from "./CartItem";
import styles from "./cart-items.module.css";

const CartItemList = () => {
  const cart = useCartContext();

  if (!cart) {
    throw new Error("no cart found");
  }

  if (cart.totalQuantity === 0) {
    return (
      <Typography
        sx={{
          fontWeight: 600,
          textAlign: "center",
        }}
      >
        Cart is empty
      </Typography>
    );
  }

  return (
    <ul className={styles["cart-items-container"]}>
      {cart.products.map((product) => (
        <CartItem key={product.id} cart={cart} product={product} />
      ))}
    </ul>
  );
};

export default CartItemList;
