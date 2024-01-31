import { SmallHeader } from "@/components/Header/SmallHeader";
import { BottomNav, CalenderNav } from "@/components/Nav";

const Reservation = () => {
  return (
    <div className="text-pri-dg max-w-screen-sm m-auto">
      <SmallHeader>Reservera tid</SmallHeader>
      <CalenderNav />
      <div className="shadow-md rounded-lg w-36 h-36 flex items-center">
        <p> Loopa ut tidsslottar</p>
      </div>
      <BottomNav />
    </div>
  );
};

export default Reservation;
