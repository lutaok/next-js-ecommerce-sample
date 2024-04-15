import Box from "@mui/material/Box";
import CartItemList from "@/components/CartItems/CartItemsList";
import CartActions from "@/components/CartActions/CartActions";

const CartPage = () => {
  return (
    <main>
      <Box>
        <CartItemList />
        <Box
          sx={{
            paddingBlock: "1rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
          }}
        >
          <CartActions />
        </Box>
      </Box>
    </main>
  );
};

export default CartPage;
