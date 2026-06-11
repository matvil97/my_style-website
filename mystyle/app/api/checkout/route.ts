import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2026-05-27.dahlia",
});

type CartItem = {
  id: number;
  name: string;
  priceInCents: number;
  image: string;
  quantity: number;
  size?: string;
  color?: string;
};

export async function POST(req: NextRequest) {
  if (!process.env.STRIPE_SECRET_KEY) {
    return NextResponse.json(
      { error: "Stripe non configuré" },
      { status: 500 }
    );
  }

  const { items }: { items: CartItem[] } = await req.json();

  if (!items || items.length === 0) {
    return NextResponse.json({ error: "Panier vide" }, { status: 400 });
  }

  const origin = req.headers.get("origin") ?? process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    mode: "payment",
    locale: "fr",
    line_items: items.map((item) => ({
      price_data: {
        currency: "eur",
        unit_amount: item.priceInCents,
        product_data: {
          name: [item.name, item.size, item.color].filter(Boolean).join(" — "),
          images: item.image ? [`${origin}${item.image}`] : [],
        },
      },
      quantity: item.quantity,
    })),
    success_url: `${origin}/?commande=ok`,
    cancel_url: `${origin}/`,
  });

  return NextResponse.json({ url: session.url });
}
