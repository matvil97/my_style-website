"use client";

import { useState } from "react";
import Image from "next/image";

type Product = {
  name: string;
  price: string;
  images: string[];
  stripeLink: string;
};

export default function ProductCard({ product }: { product: Product }) {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <div className="group overflow-hidden border border-white/10 bg-[#050505]">
    <div className="relative aspect-[4/5] overflow-hidden bg-black">
        <Image
          src={product.images[activeImage]}
          alt={product.name}
          fill
          priority={activeImage === 0}
          className="object-cover object-center transition duration-700 group-hover:scale-[1.03]"
        />

        {product.images.length > 1 && (
          <>
            <button
              onClick={() =>
                setActiveImage((prev) =>
                  prev === 0 ? product.images.length - 1 : prev - 1
                )
              }
              className="absolute left-3 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/70 text-white transition hover:bg-[#C8A97E] hover:text-black"
            >
              ‹
            </button>

            <button
              onClick={() =>
                setActiveImage((prev) =>
                  prev === product.images.length - 1 ? 0 : prev + 1
                )
              }
              className="absolute right-3 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/70 text-white transition hover:bg-[#C8A97E] hover:text-black"
            >
              ›
            </button>
          </>
        )}
      </div>

      <div className="border-t border-white/10 p-6">
        <p className="font-ui mb-3 text-[10px] uppercase tracking-[0.35em] text-[#C8A97E]">
          MYSTYLE KINAME
        </p>

        <h3 className="font-title text-3xl uppercase leading-none text-white md:text-4xl">
          {product.name}
        </h3>

        {product.images.length > 1 && (
          <div className="mt-5 flex gap-2">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setActiveImage(index)}
                className={`relative h-16 w-16 overflow-hidden border transition ${
                  activeImage === index
                    ? "border-[#C8A97E]"
                    : "border-white/20 hover:border-white"
                }`}
              >
                <Image
                  src={image}
                  alt={`${product.name}-${index}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        )}

        <div className="mt-8 flex items-center justify-between">
          <span className="font-ui text-sm tracking-[0.25em] text-white">
            {product.price}
          </span>

          <a
            href={product.stripeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="font-ui text-xs uppercase tracking-[0.3em] text-[#C8A97E] transition hover:text-white"
          >
            Acheter →
          </a>
        </div>
      </div>
    </div>
  );
}