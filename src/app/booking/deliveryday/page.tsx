import { getTimeSlots } from "@/actions/getTimeSlots";
import { MainHeader } from "@/components/Header";
import { BottomNav } from "@/components/Nav";
import { SelectDay } from "@/components/SelectDay";

const DeliveryDay = async () => {
  const initialSlots = await getTimeSlots(Date.now());

  return (
    <>
      <div className="pb-20 h-screen mt-10 mb-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-auto">
        <SelectDay initialSlots={initialSlots} />
        <BottomNav prev="/booking/products" next="/booking/checkout" />
      </div>
    </>
  );
};

export default DeliveryDay;
