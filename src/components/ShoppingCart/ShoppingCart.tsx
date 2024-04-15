"use client";

import { useRouter } from "next/navigation";
import Button from "@mui/material/Button";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { useCartContext } from "../UserCartProvider/UserCartProvider";
import styles from "./shopping-cart.module.css";

const ShoppingCart = () => {
  const cart = useCartContext();
  const router = useRouter();

  return (
    <Button
      sx={{
        position: "relative",
      }}
      onClick={() => {
        // Need to use router in order to maintain client-side set state
        router.push("/cart");
      }}
    >
      <ShoppingBagOutlinedIcon
        sx={{
          fill: "black",
        }}
      />
      <span className={styles["cart-number"]}>{cart?.totalQuantity ?? 0}</span>
    </Button>
  );
};

export default ShoppingCart;
