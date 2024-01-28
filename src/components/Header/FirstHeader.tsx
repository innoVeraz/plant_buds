import React from "react";

import Image from "next/image";
import logoImg from "../../../public/logo-white.svg";

export const FirstHeader = () => {
  return (
    <div className="text-white bg-pri-dg">
      <div className="flex flex-col items-center">
        <Image src={logoImg} alt="logotype" />
        <p className="font-thin text-2xl">planting a smile on your face</p>
      </div>

      <p>Skriv in ditt postnummer för att se om vi jobbar i ditt område</p>
    </div>
  );
};
