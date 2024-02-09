"use client";

import { useShoppingCartStore } from "@/app/booking/store";
import { products } from "@prisma/client";
import Image from "next/image";
import Button from "./Button";

type Props = {
  partialProducts: products[];
};

const ProductCard = ({ partialProducts }: Props) => {
  const cart = useShoppingCartStore();

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 p-8 gap-4 font-thin ">
      {partialProducts.map((product) => (
        <div
          key={product.id}
          className="flex flex-col justify-between items-center  shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
        >
          <div className="text-center">
            <Image
              className="object-cover max-h-100 w-full"
              src={product.img_url!}
              alt={product.description!}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
            />
            <p className="p-2 font-normal bg-light-green">{product.name}</p>
            <p className="p-2 text-sm">{product.description}</p>
          </div>
          <div className="text-center pb-4">
            <div>
              <p>{product.price} kr</p>
              <Button
                variant="primary"
                onClick={() => {
                  cart.addPot(product);
                }}
              >
                Lägg till
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
