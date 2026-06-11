"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export type CartItem = {
  id: number;
  name: string;
  price: string;
  priceInCents: number;
  image: string;
  quantity: number;
  size?: string;
  color?: string;
};

type CartContextType = {
  items: CartItem[];
  addItem: (item: Omit<CartItem, "quantity">) => void;
  removeItem: (id: number, size?: string, color?: string) => void;
  updateQty: (id: number, qty: number, size?: string, color?: string) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
};

const CartContext = createContext<CartContextType | null>(null);

function matches(i: CartItem, id: number, size?: string, color?: string) {
  return i.id === id && i.size === size && i.color === color;
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  function addItem(item: Omit<CartItem, "quantity">) {
    setItems((prev) => {
      const existing = prev.find((i) =>
        matches(i, item.id, item.size, item.color)
      );
      if (existing) {
        return prev.map((i) =>
          matches(i, item.id, item.size, item.color)
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  }

  function removeItem(id: number, size?: string, color?: string) {
    setItems((prev) => prev.filter((i) => !matches(i, id, size, color)));
  }

  function updateQty(id: number, qty: number, size?: string, color?: string) {
    if (qty <= 0) { removeItem(id, size, color); return; }
    setItems((prev) =>
      prev.map((i) =>
        matches(i, id, size, color) ? { ...i, quantity: qty } : i
      )
    );
  }

  function clearCart() { setItems([]); }

  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);
  const totalPrice = items.reduce((sum, i) => sum + i.priceInCents * i.quantity, 0);

  return (
    <CartContext.Provider
      value={{ items, addItem, removeItem, updateQty, clearCart, totalItems, totalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}
