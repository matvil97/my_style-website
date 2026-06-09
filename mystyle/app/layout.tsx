import type { Metadata } from "next";
import { Oswald, Cormorant_Garamond, Inter } from "next/font/google";
import { CartProvider } from "../contexts/CartContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "MYSTYLE",
  description: "Maison franco-congolaise",
  icons: {
    icon: "/favicon.png",
  },
};

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-title",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-body",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-ui",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body
        className={`${oswald.variable} ${cormorant.variable} ${inter.variable}`}
      >
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}