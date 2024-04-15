"use client";

import { UserCart } from "@/interfaces/cart";
import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from "react";

const UserCartContext = createContext<UserCart | null>(null);
const UserCartDispatcherContext = createContext<Dispatch<SetStateAction<UserCart | null>> | null>(null);

interface UserCartProviderProps {
  children: ReactNode;
  initialCart: UserCart | null;
}

export const UserCartProvider = ({ children, initialCart }: UserCartProviderProps) => {
  const [cart, setCart] = useState<UserCart | null>(initialCart);

  return (
    <UserCartContext.Provider value={cart}>
      <UserCartDispatcherContext.Provider value={setCart}>{children}</UserCartDispatcherContext.Provider>
    </UserCartContext.Provider>
  );
};

export const useCartContext = () => {
  const cart = useContext(UserCartContext);
  if (cart === undefined) {
    throw new Error("useCartContext must be used within a UserCartProvider");
  }
  return cart;
};

export const useCartDispatcherContext = () => {
  const dispatcher = useContext(UserCartDispatcherContext);
  if (!dispatcher) {
    throw new Error("useCartDispatcherContext must be used within a UserCartProvider");
  }
  return dispatcher;
};
