"use client";

import Image from "next/image";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import { products } from "../data/products";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Navbar />

      <section className="relative min-h-screen overflow-hidden">
        <Image
          src="/heros.jpg"
          alt="MYSTYLE - silhouette urbaine"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/25 to-black" />

        <div className="relative z-10 flex min-h-screen items-center justify-center px-6 pt-24 text-center">
          <div className="mx-auto max-w-6xl animate-[fadeIn_1.6s_ease-out_forwards] opacity-0">
            <p className="font-ui mb-8 text-[10px] uppercase tracking-[0.45em] text-[#C8A97E] md:text-xs">
              Maison franco-congolaise
            </p>

            <p className="font-title mb-8 text-3xl uppercase tracking-[0.42em] text-[#C8A97E] md:text-5xl">
              MYSTYLE
            </p>

            <h1 className="font-title text-5xl uppercase leading-[0.95] tracking-[0.05em] text-[#F5F5F5] md:text-7xl lg:text-[6rem]">
              L'élégance de l'ombre,
              <br />
              la force de l'identité
            </h1>

            <div className="mx-auto mt-10 h-px w-28 bg-[#C8A97E]" />

            <p className="font-body mx-auto mt-10 max-w-3xl text-2xl leading-relaxed text-zinc-300 md:text-3xl">
              Entre mystère et expression personnelle, chaque pièce devient le
              reflet d'une identité singulière.
            </p>

            <a
              href="#collection"
              className="font-ui mt-10 inline-flex rounded-full border border-[#C8A97E] px-8 py-4 text-[10px] uppercase tracking-[0.35em] text-white transition duration-300 hover:bg-[#C8A97E] hover:text-black"
            >
              Découvrir la collection
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="border-t border-white/10 px-6 py-28">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="font-ui text-xs uppercase tracking-[0.4em] text-[#C8A97E]">
              Manifesto
            </p>

            <h2 className="font-title mt-4 text-5xl uppercase md:text-7xl">
              MYSTYLE est une signature
            </h2>
          </div>

          <div className="font-body space-y-6 text-2xl leading-relaxed text-zinc-300 md:text-3xl">
            <p>
              Une rencontre subtile entre le mystère et l'expression
              personnelle.
            </p>

            <p>
              Une marque pensée pour celles et ceux qui refusent les codes
              imposés et choisissent d'affirmer leur identité à travers chaque
              détail.
            </p>

            <p className="text-[#C8A97E]">
              Entre élégance intemporelle et audace contemporaine, MYSTYLE
              célèbre la liberté d'être soi.
            </p>
          </div>
        </div>
      </section>

      <section id="collection" className="px-6 py-28">
        <div className="mx-auto max-w-[1600px]">
          <p className="font-ui mb-4 text-xs uppercase tracking-[0.4em] text-[#C8A97E]">
            Collection
          </p>

          <h2 className="font-title mb-12 text-5xl uppercase md:text-7xl">
            Pièces signature
          </h2>

          <div className="grid gap-10 lg:grid-cols-2">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <p className="font-ui mb-4 text-xs uppercase tracking-[0.4em] text-[#C8A97E]">
            Galerie
          </p>

          <h2 className="font-title mb-12 text-5xl uppercase md:text-7xl">
            Éditorial visuel
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="relative h-[500px] overflow-hidden">
              <Image
                src="/collection2.jpg"
                alt="Editorial MYSTYLE"
                fill
                className="object-cover transition duration-700 hover:scale-105"
              />
            </div>

            <div className="relative h-[600px] overflow-hidden md:mt-12">
              <Image
                src="/collection5.jpg"
                alt="Editorial MYSTYLE"
                fill
                className="object-cover transition duration-700 hover:scale-105"
              />
            </div>

            <div className="relative h-[500px] overflow-hidden">
              <Image
                src="/collection3.jpg"
                alt="Editorial MYSTYLE"
                fill
                className="object-cover transition duration-700 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 px-6 py-28">
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-ui text-xs uppercase tracking-[0.4em] text-[#C8A97E]">
            Vision
          </p>

          <h2 className="font-title mt-4 text-5xl uppercase md:text-7xl">
            Mystère. Style. Identité.
          </h2>

          <p className="font-body mt-8 text-2xl leading-relaxed text-zinc-400 md:text-3xl">
            MYSTYLE célèbre l'individualité, l'assurance et la liberté de
            s'approprier chaque pièce pour en faire le reflet de sa propre
            identité.
          </p>
        </div>
      </section>

      <section id="contact" className="px-6 py-28">
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-ui text-xs uppercase tracking-[0.4em] text-[#C8A97E]">
            Contact
          </p>

          <h2 className="font-title mt-4 text-5xl uppercase md:text-7xl">
            Entrer dans l'univers
          </h2>

          <p className="font-body mt-6 text-2xl text-zinc-400">
            Suis-nous sur Instagram ou contacte-nous pour toute demande.
          </p>

          <a
            href="https://www.instagram.com/mystyle_off12/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-ui mt-10 inline-block rounded-full border border-[#C8A97E] px-8 py-4 text-xs uppercase tracking-[0.35em] transition hover:bg-[#C8A97E] hover:text-black"
          >
            Instagram
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}