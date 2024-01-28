import Image from "next/image";
import flowerImg from "../../public/logo-flower-green.svg";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Header = ({ children }: Props) => {
  return (
    <div>
      <Image src={flowerImg} alt="grön logotyp av en blomma" />
      <h2 className="text-4xl text-pri-dg">{children}</h2>
    </div>
  );
};

export default Header;
