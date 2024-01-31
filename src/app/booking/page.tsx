import { SmallHeader } from "@/components/Header/SmallHeader";
import { BottomNav, CalenderNav } from "@/components/Nav";

const Booking = () => {
  return (
    <div className="max-w-md pb-20 mt-10 mb-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-auto">
      <SmallHeader>Reservera tid</SmallHeader>
      <CalenderNav />
      <div className="grid grid-cols-2 gap-4 justify-items-center p-8">
        <div className="shadow-md rounded-lg w-36 h-36 flex items-center">
          <p className="text-center m-auto"> Loopa ut tidsslottar</p>
        </div>
        <div className="shadow-md rounded-lg w-36 h-36 flex items-center">
          <p className="text-center m-auto"> Loopa ut tidsslottar</p>
        </div>
        <div className="shadow-md rounded-lg w-36 h-36 flex items-center">
          <p className="text-center m-auto"> Loopa ut tidsslottar</p>
        </div>
        <div className="shadow-md rounded-lg w-36 h-36 flex items-center">
          <p className="text-center m-auto"> Loopa ut tidsslottar</p>
        </div>
        <div className="shadow-md rounded-lg w-36 h-36 flex items-center">
          <p className="text-center m-auto"> Loopa ut tidsslottar</p>
        </div>
        <div className="shadow-md rounded-lg w-36 h-36 flex items-center">
          <p className="text-center m-auto"> Loopa ut tidsslottar</p>
        </div>
      </div>
      <BottomNav />
    </div>
  );
};

export default Booking;
