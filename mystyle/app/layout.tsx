import { Oswald, Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

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
      <body className={`${oswald.variable} ${cormorant.variable} ${inter.variable}`}>
        {children}
      </body>
    </html>
  );
}