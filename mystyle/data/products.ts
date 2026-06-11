export const products = [
  {
    id: 1,
    name: "T-Shirt MYSTYLE KINAME - Noir",
    price: "49,90 € TTC",
    priceInCents: 4990,
    category: "vetements",
    sizes: ["S", "M", "L", "XL"],
    images: [
      "/tshirtns1.png",
      "/tshirtns2.png",
    ],
    stripeLink:
      "https://buy.stripe.com/7sYdRbajQ7r79eYdSL3ks03",
  },

  {
    id: 2,
    name: "T-Shirt MYSTYLE KINAME - Blanc",
    price: "49,90 € TTC",
    priceInCents: 4990,
    category: "vetements",
    sizes: ["S", "M", "L", "XL"],
    images: [
      "/tshirtbs1.png",
      "/tshirtbs2.png",
    ],
    stripeLink:
      "https://buy.stripe.com/dRm9AVcrY9zf1Mw5mf3ks01",
  },

  {
    id: 3,
    name: "T-Shirt MYSTYLE KINAME - Rose",
    price: "49,90 € TTC",
    priceInCents: 4990,
    category: "vetements",
    sizes: ["S", "M", "L", "XL"],
    images: [
      "/tshirtrs1.png",
      "/tshirtrs2.png",
    ],
    stripeLink:
      "https://buy.stripe.com/bJedRb0Jg4eVdve4ib3ks04",
    soldOut: true,
  },

  {
    id: 4,
    name: "Hoodie MYSTYLE KINAME - Noir",
    price: "69,90 € TTC",
    priceInCents: 6990,
    category: "vetements",
    sizes: ["S", "M", "L", "XL"],
    images: [
      "/hoodie_noi.jpeg",
      "/hoodie_dosnoir.jpeg",
    ],
    stripeLink:
      "https://buy.stripe.com/8x2fZjbnU8vb9eY4ib3ks02",
  },

  {
    id: 5,
    name: "Hoodie MYSTYLE KINAME - Gris",
    price: "69,90 € TTC",
    priceInCents: 6990,
    category: "vetements",
    sizes: ["S", "M", "L", "XL"],
    images: [
      "/hoodie_facegris.jpeg",
      "/hoodie_dosgris.jpeg",
    ],
    stripeLink:
      "https://buy.stripe.com/aFa14p0Jg6n39eY5mf3ks00",
    soldOut: true,
  },

  {
    id: 6,
    name: "Casquette MYSTYLE KINAME - Noir",
    price: "29,99 € TTC",
    priceInCents: 2999,
    category: "accessoires",
    images: [
      "/casq_noire.png",
    ],
    stripeLink: "https://buy.stripe.com/3cI6oJfEa3aRaj201V3ks09",
  },

  {
    id: 8,
    name: "Casquette MYSTYLE KINAME - Blanc",
    price: "29,99 € TTC",
    priceInCents: 2999,
    category: "accessoires",
    images: [
      "/casquette_blanc.png",
    ],
    stripeLink: "https://buy.stripe.com/bJe28tfEa9zf2QAg0T3ks08",
  },

  {
    id: 7,
    name: "Socks MYSTYLE",
    price: "2 paires à 14,99 € TTC",
    priceInCents: 1499,
    category: "accessoires",
    images: [
      "/chaussette-blanche-bleu.png",
      "/chaussette-noir.png",
      "/chaussette-blanche-noir.png",
    ],
    colors: ["Blanc et bleu", "Noir", "Blanc et noir"],
    stripeLinks: {
      "Blanc et bleu": "https://buy.stripe.com/6oUcN79fM5iZ1MwcOH3ks05",
      Noir: "https://buy.stripe.com/9B628t4Zw26N0Is6qj3ks06",
      "Blanc et noir": "https://buy.stripe.com/bJe14p0JgeTzgHqg0T3ks07",
    },
  },
];
