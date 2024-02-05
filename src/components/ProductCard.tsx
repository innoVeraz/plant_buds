"use client";

import { useShoppingCartStore } from "@/app/booking/store";
import { products } from "@prisma/client";
import Image from "next/image";

type Props = {
  products: products[];
};

const ProductCard = ({ products }: Props) => {
  const cart = useShoppingCartStore();
  console.log(cart.pots);

  return (
    <div className="grid grid-cols-4 p-8 gap-8 font-thin">
      {products.map((product) => (
        <div
          key={product.id}
          className="flex flex-col items-center  shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
        >
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
            className="mt-auto mb-8 bg-blue-800 text-white p-2"
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

export default ProductCard;
