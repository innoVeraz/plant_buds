import { SecondHeader } from "@/components/Header/SecondHeader";
import { BottomNav, CalenderNav } from "@/components/Nav";

const Booking = () => {
  return (
    <div className="text-pri-dg max-w-screen-sm m-auto">
      <SecondHeader>Reservera tid</SecondHeader>
      <CalenderNav />
      <div className="shadow-md rounded-lg w-36 h-36 flex items-center">
        <p> Loopa ut tidsslottar</p>
      </div>
      <BottomNav />
    </div>
  );
};

export default Booking;
