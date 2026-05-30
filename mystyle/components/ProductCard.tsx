import Image from "next/image";

type Product = {
  name: string;
  price: string;
  image: string;
  description: string;
  stripeLink: string;
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group overflow-hidden rounded-2xl bg-zinc-950 border border-white/10">
      <div className="relative h-96 overflow-hidden bg-zinc-900">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition duration-700 group-hover:scale-105"
        />
      </div>

      <div className="p-5 text-white">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">{product.name}</h3>
          <span>{product.price}</span>
        </div>

        <p className="mt-2 text-sm text-zinc-400">{product.description}</p>

        <a
          href={product.stripeLink}
          target="_blank"
          className="mt-5 block rounded-full bg-white px-5 py-3 text-center text-sm font-semibold uppercase tracking-widest text-black transition hover:bg-zinc-300"
        >
          Acheter maintenant
        </a>
      </div>
    </div>
  );
}