"use client";

import { useState } from "react";
import Image from "next/image";

type Product = {
  name: string;
  price: string;
  images: string[];
  colors: string[];
  stripeLinks: {
  [key: string]: string | undefined;
};
};

export default function ProductCard({ product }: { product: Product }) {
  const [activeImage, setActiveImage] = useState(0);

  const activeColor = product.colors[activeImage];
  const activeStripeLink = product.stripeLinks[activeColor] ?? "#";

  return (
    <div className="group overflow-hidden border border-white/15 bg-[#070707]">
      <div className="relative h-[620px] bg-[#f5f5f5]">
        <Image
          src={product.images[activeImage]}
          alt={`${product.name} ${activeColor}`}
          fill
          className="object-contain p-4 transition duration-700 group-hover:scale-[1.03]"
        />

        <button
          onClick={() =>
            setActiveImage((prev) =>
              prev === 0 ? product.images.length - 1 : prev - 1
            )
          }
          className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/70 text-xl text-white hover:bg-[#C8A97E] hover:text-black"
        >
          ‹
        </button>

        <button
          onClick={() =>
            setActiveImage((prev) =>
              prev === product.images.length - 1 ? 0 : prev + 1
            )
          }
          className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/70 text-xl text-white hover:bg-[#C8A97E] hover:text-black"
        >
          ›
        </button>
      </div>

      <div className="border-t border-white/10 p-7">
        <p className="font-ui mb-3 text-[10px] uppercase tracking-[0.35em] text-[#C8A97E]">
          MYSTYLE KINAME
        </p>

        <h3 className="font-title text-4xl uppercase leading-none text-white">
          {product.name}
        </h3>

        <p className="font-body mt-4 text-xl text-zinc-400">
          Coloris sélectionné :{" "}
          <span className="text-white">{activeColor}</span>
        </p>

        <div className="mt-5 flex gap-2">
          {product.colors.map((color, index) => (
            <button
              key={color}
              onClick={() => setActiveImage(index)}
              className={`border px-4 py-2 font-ui text-[10px] uppercase tracking-[0.25em] transition ${
                activeImage === index
                  ? "border-[#C8A97E] text-[#C8A97E]"
                  : "border-white/20 text-zinc-400 hover:border-white hover:text-white"
              }`}
            >
              {color}
            </button>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-between">
          <span className="font-ui text-sm tracking-[0.25em] text-white">
            {product.price}
          </span>

          <a
            href={activeStripeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="font-ui text-xs uppercase tracking-[0.25em] text-[#C8A97E] transition hover:text-white"
          >
            Acheter →
          </a>
        </div>
      </div>
    </div>
  );
}