"use client";

import { useCart } from "../contexts/CartContext";
import Image from "next/image";
import { useState } from "react";

export default function CartDrawer({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const { items, removeItem, updateQty, totalPrice, clearCart } = useCart();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleCheckout() {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items }),
      });
      if (!res.ok) {
        const data = await res.json();
        setError(data.error ?? "Erreur lors de la commande");
        setLoading(false);
        return;
      }
      const { url } = await res.json();
      clearCart();
      window.location.href = url;
    } catch {
      setError("Erreur réseau. Réessaie.");
      setLoading(false);
    }
  }

  const formattedTotal = (totalPrice / 100).toLocaleString("fr-FR", {
    style: "currency",
    currency: "EUR",
  });

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/60"
          onClick={onClose}
        />
      )}

      <div
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-[#0a0a0a] transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
          <p className="font-ui text-xs uppercase tracking-[0.4em] text-[#C8A97E]">
            Panier
          </p>
          <button
            onClick={onClose}
            className="text-white/60 transition hover:text-white"
          >
            ✕
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 items-center justify-center">
            <p className="font-ui text-xs uppercase tracking-[0.3em] text-white/40">
              Ton panier est vide
            </p>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
              {items.map((item) => (
                <div
                  key={`${item.id}-${item.color ?? ""}`}
                  className="flex gap-4"
                >
                  {item.image ? (
                    <div className="relative h-20 w-16 shrink-0 overflow-hidden border border-white/10 bg-black">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                  ) : (
                    <div className="h-20 w-16 shrink-0 border border-white/10 bg-black" />
                  )}

                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <p className="font-ui text-[11px] uppercase tracking-[0.25em] text-white leading-snug">
                        {item.name}
                      </p>
                      {item.color && (
                        <p className="font-ui mt-0.5 text-[10px] uppercase tracking-[0.2em] text-white/40">
                          {item.color}
                        </p>
                      )}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() =>
                            updateQty(item.id, item.quantity - 1, item.color)
                          }
                          className="flex h-6 w-6 items-center justify-center border border-white/20 text-white/60 hover:border-white hover:text-white transition"
                        >
                          −
                        </button>
                        <span className="font-ui text-xs tracking-widest text-white w-4 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQty(item.id, item.quantity + 1, item.color)
                          }
                          className="flex h-6 w-6 items-center justify-center border border-white/20 text-white/60 hover:border-white hover:text-white transition"
                        >
                          +
                        </button>
                      </div>

                      <div className="flex items-center gap-3">
                        <span className="font-ui text-xs tracking-[0.2em] text-white">
                          {((item.priceInCents * item.quantity) / 100).toLocaleString("fr-FR", {
                            style: "currency",
                            currency: "EUR",
                          })}
                        </span>
                        <button
                          onClick={() => removeItem(item.id, item.color)}
                          className="text-white/30 hover:text-white/70 transition text-xs"
                        >
                          ✕
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-white/10 px-6 py-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-ui text-xs uppercase tracking-[0.3em] text-white/60">
                  Total
                </span>
                <span className="font-ui text-sm tracking-[0.25em] text-white">
                  {formattedTotal}
                </span>
              </div>

              {error && (
                <p className="font-ui text-[10px] uppercase tracking-[0.2em] text-red-400">
                  {error}
                </p>
              )}

              <button
                onClick={handleCheckout}
                disabled={loading}
                className="font-ui w-full border border-[#C8A97E] py-4 text-xs uppercase tracking-[0.35em] text-[#C8A97E] transition hover:bg-[#C8A97E] hover:text-black disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Chargement…" : "Commander →"}
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
