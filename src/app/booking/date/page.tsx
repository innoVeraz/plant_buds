import { SmallHeader } from "@/components/Header/SmallHeader";
import { BottomNav, CalenderNav } from "@/components/Nav";
import TimeSlots from "@/components/TimeSlots";


const Date = () => {
  return (
    <div className="max-w-md pb-20 mt-10 mb-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-auto">
      <CalenderNav />
      <TimeSlots />
      <BottomNav prev="/booking/products" next="/booking/checkout"/>
    </div>
  );
};

export default Date;
