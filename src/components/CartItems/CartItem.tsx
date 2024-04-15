"use client";

import Image from "next/image";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { ProductInCart, UserCart } from "@/interfaces/cart";
import { useCartDispatcherContext } from "../UserCartProvider/UserCartProvider";
import { removeProductFromCart } from "@/utils/cart";

interface CartItemProps {
  cart: UserCart;
  product: ProductInCart;
}
const CartItem = ({ cart, product }: CartItemProps) => {
  const setCart = useCartDispatcherContext();

  const handleProductRemoveButtonClick = async () => {
    try {
      const freshCart = await removeProductFromCart(cart.products, product, cart.id);
      setCart(freshCart);
    } catch (e) {
      console.log("Alert");
    }
  };

  return (
    <Box
      component={"li"}
      sx={{
        display: "flex",
        gap: "1rem",
        borderBottom: "1px solid white",
        paddingBlock: "1rem",
      }}
    >
      <Image alt={product.title} width={100} height={100} src={product.thumbnail} priority />
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <Typography
            sx={{
              fontWeight: 600,
            }}
          >
            {product.title}
          </Typography>
          <Typography>€ {product.price * product.quantity}</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <Typography
            sx={{
              fontSize: "0.825rem",
            }}
          >
            Qty {product.quantity}
          </Typography>
          <Button
            sx={{
              padding: "0rem",
              textTransform: "unset",
            }}
            onClick={handleProductRemoveButtonClick}
          >
            Remove
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default CartItem;
