import prisma from "@/db";

import ProductCard from "@/components/ProductCard";
import { getTimeSlots } from "@/actions/getTimeSlots";
import { BottomNav } from "@/components/Nav";
import { SelectDay } from "@/components/SelectDay";

async function getProducts() {
  return await prisma?.products.findMany();
}

async function getPartialProducts() {
  const partialProducts = await prisma?.products.findMany({
    take: 8,
  });
  return partialProducts;
}

const Products = async () => {
  const [products, initialSlots, partialProducts] = await Promise.all([
    getProducts(),
    getTimeSlots(Date.now()),
    getPartialProducts(),
  ]);

  return (
    <div>
      <h2 className="text-3xl text-center font-thin pt-10">Bokning</h2>
      <div className="pb-20 mt-10 mb-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-auto">
        <h3 className="text-3xl text-center font-thin pt-10">
          Välj dag och tid
        </h3>
        <SelectDay initialSlots={initialSlots} />
      </div>

      <h2 className="text-3xl text-center font-thin pt-10">Lägg till krukor</h2>
      <div className=" mt-10 mb-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-auto">
        <ProductCard partialProducts={partialProducts} />
        <BottomNav prev="/" next="/booking/checkout" />
      </div>
    </div>
  );
};
export default Products;
