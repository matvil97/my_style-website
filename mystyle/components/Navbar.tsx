"use client";

import Image from "next/image";
import { useState } from "react";
import { useCart } from "../contexts/CartContext";
import CartDrawer from "./CartDrawer";

export default function Navbar() {
  const [cartOpen, setCartOpen] = useState(false);
  const { totalItems } = useCart();

  return (
    <>
      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/75 backdrop-blur-md">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-10">
          <a href="/">
            <Image
              src="/logo_mystyle.png"
              alt="MYSTYLE"
              width={140}
              height={50}
              priority
              className="h-auto w-[120px] object-contain"
            />
          </a>

          <div className="flex items-center gap-6 md:gap-9">
            <div className="hidden items-center gap-9 md:flex">
              <a
                href="#about"
                className="font-ui text-[11px] uppercase tracking-[0.22em] text-zinc-300 transition hover:text-[#C8A97E]"
              >
                À propos
              </a>

              <a
                href="#collection"
                className="font-ui text-[11px] uppercase tracking-[0.22em] text-zinc-300 transition hover:text-[#C8A97E]"
              >
                Collection
              </a>

              <a
                href="#gallery"
                className="font-ui text-[11px] uppercase tracking-[0.22em] text-zinc-300 transition hover:text-[#C8A97E]"
              >
                Galerie
              </a>

              <a
                href="#contact"
                className="font-ui text-[11px] uppercase tracking-[0.22em] text-zinc-300 transition hover:text-[#C8A97E]"
              >
                Contact
              </a>
            </div>

            <button
              onClick={() => setCartOpen(true)}
              className="relative flex items-center gap-1.5 text-zinc-300 transition hover:text-[#C8A97E]"
              aria-label="Ouvrir le panier"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              {totalItems > 0 && (
                <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-[#C8A97E] font-ui text-[9px] font-bold text-black">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </nav>
      </header>

      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
}
