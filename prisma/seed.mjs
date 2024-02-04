import { PrismaClient } from "@prisma/client";

const productsData = [
  {
    name: "Blåvit",
    description: "En vacker keramikkruka med blått mönster",
    quantity: 100,
    price: 150,
    img_url: "/products/bluepot.png",
  },
  {
    name: "Liten Bambu",
    description:
      "En elegant planterare i marmorfinish, skapad för att addera stil till ditt gröna hörn. Designad för både inomhus- och utomhusbruk.",
    quantity: 100,
    price: 150,
    img_url: "/products/bamboosmall.png",
  },
  {
    name: "Stor Bambu",
    description:
      "En handgjord kruka av svenskt hantverk, perfekt för att odla dina favoritväxter.",
    quantity: 100,
    price: 150,
    img_url: "/products/bamboobig.png",
  },
  {
    name: "Lera",
    description: "En lerkruka med naturliga färgskiftningar",
    quantity: 100,
    price: 150,
    img_url: "/products/beigeandspotsrounded.png",
  },
  {
    name: "Detalj",
    description:
      "En lerkruka med inspiration från naturen, perfekt för att skapa en jordnära känsla i ditt hem. Handgjord med omsorg om detaljerna.",
    quantity: 100,
    price: 150,
    img_url: "/products/bluewhitepattern.png",
  },
  {
    name: "Pricken",
    description:
      "En kruka med doft av lavendel, perfekt för att skapa en avkopplande atmosfär i ditt hem. En praktisk och vacker plats för dina växter.",
    quantity: 100,
    price: 150,
    img_url: "/products/bluewhitespots.png",
  },
  {
    name: "Stål",
    description: "En avlång kruka i borstat stål",
    quantity: 100,
    price: 150,
    img_url: "/products/brushedsteeltall.png",
  },
  {
    name: "Lera stor",
    description: "En stilren planterare i beige keramik",
    quantity: 100,
    price: 150,
    img_url: "/products/ceramicbeigeandspots.png",
  },
  {
    name: "Betongen",
    description: "En större betongkruka.",
    quantity: 100,
    price: 150,
    img_url: "/products/concretegraybig.png",
  },
  {
    name: "Lillbetong",
    description: "Lite mindre kruka i betong",
    quantity: 100,
    price: 150,
    img_url: "/products/concretegraysmall.png",
  },
  {
    name: "Korall",
    description: "En vacker korallfärgad keramikkruka med virvlande mönster",
    quantity: 100,
    price: 150,
    img_url: "/products/coralswirl.png",
  },
  {
    name: "Natur",
    description: "En naturfärgad keramikkruka",
    quantity: 100,
    price: 150,
    img_url: "/products/creambeigeceramic.png",
  },
  {
    name: "Grå",
    description: "Gråfärgad slät keramik",
    quantity: 100,
    price: 150,
    img_url: "/products/grayceramic.png",
  },
  {
    name: "Grå rund",
    description: "Mindre gråfärgad och rundad keramikkruka",
    quantity: 100,
    price: 150,
    img_url: "/products/grayceramicrounded.png",
  },
  {
    name: "Grönblad",
    description: "Grön kruka med bladmönster, keramik",
    quantity: 100,
    price: 150,
    img_url: "/products/greenleafpattern.png",
  },
  {
    name: "Crafted",
    description: "Handmålad keramik med blå blommor",
    quantity: 100,
    price: 150,
    img_url: "/products/handpaintedblueflowers.png",
  },
  {
    name: "Mönster",
    description: "Multifärgad kermikkruka med symmetriska mönster",
    quantity: 100,
    price: 150,
    img_url: "/products/handpaintedmulticolor.png",
  },
  {
    name: "Lavendel",
    description: "Lavendelfärgad keramikkruka med blommönster",
    quantity: 100,
    price: 150,
    img_url: "/products/lavenderflowerpatternsmall.png",
  },
  {
    name: "Terakotta",
    description: "En handgjord terakottafärgad kruka",
    quantity: 100,
    price: 150,
    img_url: "/products/lightteracottapatternbig.png",
  },
  {
    name: "Ljus Terakotta",
    description: "En handgjord ljust terakottafärgad kruka",
    quantity: 100,
    price: 150,
    img_url: "/products/lightteracottapatterns.png",
  },
  {
    name: "Mattsvart",
    description: "En kruka i mattsvart plast",
    quantity: 100,
    price: 150,
    img_url: "/products/matteblack.png",
  },
  {
    name: "Jade",
    description: "Jade och guldfärgad metallkruka med mönster",
    quantity: 100,
    price: 150,
    img_url: "/products/metalgoldengreen.png",
  },
  {
    name: "Mint",
    description: "Mintgrön kruka med vackert spetsmönster i vitt",
    quantity: 100,
    price: 150,
    img_url: "/products/mintgreenlacepattern.png",
  },
  {
    name: "Virvel",
    description: "Rosafärgad keramikkruka med virvelmönster",
    quantity: 100,
    price: 150,
    img_url: "/products/pinkswirlceramic.png",
  },
  {
    name: "Rottingen liten",
    description: "Liten kruka i rotting",
    quantity: 100,
    price: 150,
    img_url: "/products/rattanfootstandsmall.png",
  },
  {
    name: "Rottingen oval",
    description: "Oval handgjord rottingkruka",
    quantity: 100,
    price: 150,
    img_url: "/products/rattanopenoval.png",
  },
  {
    name: "Rottingen luftig",
    description: "Rundad och öppen handgjord rottingkruka",
    quantity: 100,
    price: 150,
    img_url: "/products/rattanopenround.png",
  },
  {
    name: "Rottingen rund",
    description: "Rundad rottingen kruka",
    quantity: 100,
    price: 150,
    img_url: "/products/rattanrounded.png",
  },
  {
    name: "Repet",
    description: "Stor kruka i naturligt repmaterial",
    quantity: 100,
    price: 150,
    img_url: "/products/ropebig.png",
  },
  {
    name: "Repet virvel",
    description: "Mindre kruka i naturligt repmateria",
    quantity: 100,
    price: 150,
    img_url: "/products/ropeswirlsmall.png",
  },
  {
    name: "Sjögräsblommor",
    description: "Grön keramikkruka med blommor",
    quantity: 100,
    price: 150,
    img_url: "/products/seafoamgreenflowers.png",
  },
  {
    name: "Sjögräs geometrisk",
    description: "Grön keramikkruka med geometriskt mönster",
    quantity: 100,
    price: 150,
    img_url: "/products/seafoamgreengeometric.png",
  },
  {
    name: "Pelargon",
    description: "Terrakottaröd standardkruka",
    quantity: 100,
    price: 150,
    img_url: "/products/teracotta.png",
  },
  {
    name: "Ljus Pelargon",
    description: "Ljust terrakottaröd mindre standardkruka",
    quantity: 100,
    price: 150,
    img_url: "/products/teracottalightsmall.png",
  },
  {
    name: "Rund Pelargon",
    description: "Ljust terrakottaröd standardkruka rundad",
    quantity: 100,
    price: 150,
    img_url: "/products/teracottaround.png",
  },
  {
    name: "Mjölk",
    description: "Vit slät rundad keramikkruka",
    quantity: 100,
    price: 150,
    img_url: "/products/whiterounded.png",
  },
  {
    name: "Karvad",
    description: "Mörk mahognykruka med handkarvat blommönster",
    quantity: 100,
    price: 150,
    img_url: "/products/woodcarvedmahogny.png",
  },
  {
    name: "Sjögräs",
    description: "",
    quantity: 100,
    price: 150,
    img_url: "/products/wovenseagrassbig.png",
  },
  {
    name: "Sjögräs liten",
    description: "",
    quantity: 100,
    price: 150,
    img_url: "/products/wovenseagrasssmall.png",
  },
  {
    name: "Våren",
    description: "Ljust gul och blå keramikkruka",
    quantity: 100,
    price: 150,
    img_url: "/products/yellowbluepastel.png",
  },
  {
    name: "Pastell",
    description: "Ljust gul och blå keramikkruka med blommönster",
    quantity: 100,
    price: 150,
    img_url: "/products/yellowbluepastelflowers.png",
  },
  {
    name: "Modern",
    description: "Gul minikruka med geometriska form",
    quantity: 100,
    price: 150,
    img_url: "/products/yellowgeometric.png",
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
