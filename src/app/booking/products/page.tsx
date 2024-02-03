import prisma from "@/db";
import { MainHeader } from "@/components/Header";
import { BottomNav } from "@/components/Nav/BottomNav";
import Pots from "@/components/Pots";
import PlantPicker from "@/components/PlantPicker";

async function getProducts() {
  return await prisma?.products.findMany();
}

const Products = async () => {
  const products = await getProducts();
  console.log(products);

  return (
    <>
      <div className="bg-acc-lg">
        <MainHeader />
        {/* <HowTo /> */}
      </div>
      <PlantPicker />

      <Pots products={products} />

      <BottomNav prev="/" next="/booking/date" />
    </>
  );
};

export default Products;
