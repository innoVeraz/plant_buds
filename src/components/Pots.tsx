"use client";

import { useShoppingCartStore } from "@/app/booking/store";
import { products } from "@prisma/client";
import Image from "next/image";

type Props = {
  products: products[];
};

const Pots = ({ products }: Props) => {
  const cart = useShoppingCartStore();
  console.log(cart.pots);

  return (
    <div className="grid grid-cols-4 p-2 font-thin">
      {products.map((product) => (
        <div key={product.id} className="flex flex-col items-center p-2">
          <Image
            className="object-cover max-h-100 w-full"
            src={product.img_url!}
            alt={product.description!}
            width={200}
            height={200}
          />
          <div className="p-2 text-center">
            <p>{product.name}</p>
            <p>{product.description}</p>
          </div>
          <button
            className="mt-auto bg-blue-500 text-white p-2"
            onClick={() => {
              cart.addPot(product);
            }}
          >
            Lägg till
          </button>
        </div>
      ))}
    </div>
  );
};

export default Pots;
