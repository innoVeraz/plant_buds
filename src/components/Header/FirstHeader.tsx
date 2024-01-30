import React from "react";

import Image from "next/image";
import logoImg from "../../../public/logo-white.svg";

export const FirstHeader = () => {
  return (
    <div className="text-white bg-pri-dg pt-10">
      <div className="flex flex-col items-center">
        <Image src={logoImg} alt="logotype" />
        <p className="font-thin text-2xl pt-8">
          &quot;planting a smile on your face&quot;
        </p>
      </div>
    </div>
  );
};
