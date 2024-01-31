import Image from "next/image";
import flowerImg from "../../../public/plant-buds-small-green.svg";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const SecondHeader = ({ children }: Props) => {
  return (
    <div>
      <Image
        src={flowerImg}
        alt="grön logotyp av en blomma"
        className="w-14 h-14 mt-10"
      />
      <h2 className=" flex justify-center text-4xl text-pri-dg mb-10">
        {children}
      </h2>
    </div>
  );
};
