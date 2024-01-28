import Image from "next/image";
import flowerImg from "../../../public/logo-flower-green.svg";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const SecondHeader = ({ children }: Props) => {
  return (
    <div>
      <Image src={flowerImg} alt="grön logotyp av en blomma" />
      <h2 className=" flex justify-center text-4xl text-pri-dg">{children}</h2>
    </div>
  );
};
