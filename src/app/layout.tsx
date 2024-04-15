import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider } from "@mui/material/styles";

import NavBar from "@/components/NavBar/NavBar";
import { UserCartProvider } from "@/components/UserCartProvider/UserCartProvider";
import { getUserCart } from "@/utils/cart";
import theme from "@/theme";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E-commerce sample",
  description: "TakeHome",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cart = await getUserCart();

  return (
    <html lang="en">
      <body className={inter.className}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <UserCartProvider initialCart={cart}>
              <NavBar />
              {children}
            </UserCartProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
