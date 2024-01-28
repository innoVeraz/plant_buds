import Image from "next/image";
import flowerImg from "../assets/logo-flower-green.svg";

import {
  ChevronLeftIcon,
  ChevronRightIcon,
  CalendarIcon,
} from "@radix-ui/react-icons";

const Booking = () => {
  return (
    <div className="text-pri-dg max-w-screen-2xl">
      <label htmlFor=""></label>
      <Image src={flowerImg} alt="grön logotyp av en blomma" />
      {/* Menykomponent */}
      <h2 className="text-4xl">Reservera en tid</h2>
      <div className="flex gap-2 h-7 bg-sec-mg justify-center items-center text-white">
        <div>
          <ChevronLeftIcon className="mb-1" />
        </div>

        <div>tisdag</div>
        <CalendarIcon className="mb-1" />
        <ChevronRightIcon className="mb-1" />
      </div>
      <section>
        <div className="shadow-md rounded-lg w-36 h-36 flex items-center">
          <p> Loopa ut tidsslottar</p>
        </div>
        <div className="flex gap-2 bg-sec-mg justify-center text-white">
          <ChevronLeftIcon />
          <p>Gå tillbaka</p>
          <p>Gå vidare</p>
          <ChevronRightIcon />
        </div>
      </section>
    </div>
  );
};

export default Booking;
