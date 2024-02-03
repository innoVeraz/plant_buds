import { PrismaClient } from "@prisma/client";

const productsData = [
  {
    name: "Skogsmossens Keramikkruka",
    description:
      "En vacker keramikkruka inspirerad av skogsmossens textur. Perfekt för att ge dina växter en naturlig hemvist.",
    quantity: 100,
    price: 69,
    img_url: "/products/bluepot.png",
  },
  {
    name: "Eleganta Marmorplanteraren",
    description:
      "En elegant planterare i marmorfinish, skapad för att addera stil till ditt gröna hörn. Designad för både inomhus- och utomhusbruk.",
    quantity: 50,
    price: 49,
    img_url: "/image/url2",
  },
  {
    name: "Svensk Hantverkskruka",
    description:
      "En handgjord kruka av svenskt hantverk, perfekt för att odla dina favoritväxter med en touch av traditionellt svenskt konsthantverk.",
    quantity: 75,
    price: 39,
    img_url: "/image/url3",
  },
  {
    name: "Solrosornas Kruka i Guld",
    description:
      "En vacker kruka i guld med solrosor som ger dina växter en exklusiv touch. En praktfull inredningsdetalj för ditt hem eller trädgård.",
    quantity: 80,
    price: 59,
    img_url: "/image/url4",
  },
  {
    name: "Naturinspirerad Lerkruka",
    description:
      "En lerkruka med inspiration från naturen, perfekt för att skapa en jordnära känsla i ditt hem. Handgjord med omsorg om detaljerna.",
    quantity: 60,
    price: 45,
    img_url: "/image/url5",
  },
  {
    name: "Trädetaljerad Planteringskärl",
    description:
      "Ett planteringskärl med detaljer i trä, skapat för att harmonisera med naturens element. En unik och funktionell design för dina gröna vännerr.",
    quantity: 90,
    price: 75,
    img_url: "/image/url6",
  },
  {
    name: "Lavendeldoftande Kruka",
    description:
      "En kruka med doft av lavendel, perfekt för att skapa en avkopplande atmosfär i ditt hem. En praktisk och vacker plats för dina växter.",
    quantity: 120,
    price: 89,
    img_url: "/image/url7",
  },
  {
    name: "Rustik Terrakottakärl",
    description:
      "Ett terrakottakärl med rustik yta, perfekt för att odla dina favoritväxter med en touch av lantlig charm. En vacker syn för ditt gröna utrymme.",
    quantity: 70,
    price: 55,
    img_url: "/image/url8",
  },
  {
    name: "Svensk Designplanterare",
    description:
      "En stilren planterare i svensk design, skapad för att integrera sömlöst med modern inredning. En funktionell konstnärlig detalj för ditt hem.",
    quantity: 110,
    price: 79,
    img_url: "/image/url9",
  },
  {
    name: "Handmålad Blomkruka",
    description:
      "En handmålad blomkruka med unika detaljer, perfekt för att addera färg och liv till din trädgård eller fönsterbräda. En konstnärlig touch till din odling.",
    quantity: 95,
    price: 65,
    img_url: "/image/url10",
  },
];

const prisma = new PrismaClient();
async function main() {
  for (const productData of productsData) {
    await prisma.products.upsert({
      where: {
        name: productData.name,
      },
      update: productData,
      create: productData,
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (err) => {
    console.log(err);
    await prisma.$disconnect();
    process.exit(1);
  });
