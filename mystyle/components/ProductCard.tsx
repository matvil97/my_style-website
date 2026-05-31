import Image from "next/image";

type Product = {
  name: string;
  price: string;
  image: string;
  stripeLink: string;
};

export default function ProductCard({
  product,
}: {
  product: Product;
}) {
  return (
    <div className="group relative overflow-hidden rounded-sm">
      <div className="relative h-[600px] overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="font-title text-3xl uppercase text-white">
            {product.name}
          </h3>

          <div className="mt-2 flex items-center justify-between">
            <span className="font-ui text-sm text-zinc-300">
              {product.price}
            </span>

            <a
              href={product.stripeLink}
              className="font-ui text-xs uppercase tracking-[0.25em] text-[#C8A97E]"
            >
              Acheter →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}