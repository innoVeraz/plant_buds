import { ReactNode } from "react";
import Image from "next/image";
import logoImg from "../../../public/plant-buds-green.svg";

type Props = {
  children: ReactNode;
};

export const SmallHeader = ({ children }: Props) => {
  return (
    <div className="flex flex-col items-center">
      <Image className="pl-8 pr-8 pt-8 pb-3" src={logoImg} alt="logotype" />
      <h2 className=" text-2xl font-thin text-leaf-green mb-10 mt-10">
        {children}
      </h2>
    </div>
  );
};
