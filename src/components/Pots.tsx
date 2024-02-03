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
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <Image
            src={product.img_url!}
            alt="blue pot"
            width={200}
            height={200}
          />
          <div>{product.name}</div>
          <button
            onClick={() => {
              cart.addPot(product.id);
            }}
          >
            lägg till
          </button>
        </div>
      ))}
    </div>
  );
};

export default Pots;
