"use client";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { useCartContext } from "../UserCartProvider/UserCartProvider";

const CartActions = () => {
  const cart = useCartContext();

  if (!cart) {
    return <>No cart found</>;
  }

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {/* Subtotal Price */}
        <Typography
          sx={{
            fontWeight: 600,
          }}
        >
          Subtotal
        </Typography>
        <Typography
          sx={{
            fontWeight: 600,
          }}
        >
          € {cart.totalPrice}
        </Typography>
      </Box>
      <Typography
        sx={{
          fontSize: "0.825rem",
        }}
      >
        Shipping and taxes calculated at checkout.
      </Typography>

      {/* Checkout Button */}
      <Button
        sx={{
          color: "white",
          background: "blue",
          "&:hover": {
            background: "darkblue",
          },
          "&:disabled": {
            background: "darkgray",
            color: "white",
          },
        }}
        disabled={cart.totalQuantity === 0}
        onClick={() => {
          // TODO: Implement checkout
          console.log("checkout with these products", cart.products);
        }}
      >
        Checkout
      </Button>

      <Typography
        sx={{
          textAlign: "center",
        }}
      >
        or
      </Typography>
      <Typography
        sx={{
          textAlign: "center",
          color: "blue",
        }}
        component={"span"}
      >
        <Link href={"/"}>Continue shopping</Link>
      </Typography>
    </>
  );
};

export default CartActions;
