import prisma from "@/db";
import { MainHeader } from "@/components/Header";
import { BottomNav } from "@/components/Nav/BottomNav";
import ProductCard from "@/components/ProductCard";
import PlantPicker from "@/components/PlantPicker";

async function getProducts() {
  return await prisma?.products.findMany();
}

const Products = async () => {
  const products = await getProducts();

  return (
    <>
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
