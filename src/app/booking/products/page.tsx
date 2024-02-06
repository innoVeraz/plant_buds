import prisma from "@/db";
import { Header } from "@/components/Header";

import ProductCard from "@/components/ProductCard";
import PlantPicker from "@/components/PlantPicker";
import { getTimeSlots } from "@/actions/getTimeSlots";
import { BottomNav } from "@/components/Nav";
import { SelectDay } from "@/components/SelectDay";

async function getProducts() {
  return await prisma?.products.findMany();
}

const Products = async () => {
  const [products, initialSlots] = await Promise.all([
    getProducts(),
    getTimeSlots(Date.now()),
  ]);

  return (
    <>
      <div className="pb-20mt-10 mb-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-auto">
        <SelectDay initialSlots={initialSlots} />
      </div>
      <div className="bg-acc-lg text-dark-forest">
        <div className="text-4xl text-center font-thin pt-10">
          <h1>Krukor</h1>
        </div>
      </div>
      {/* <PlantPicker /> */}
      <ProductCard products={products} />
      <BottomNav prev="/" next="/booking/deliveryday" />
    </>
  );
};
export default Products;
