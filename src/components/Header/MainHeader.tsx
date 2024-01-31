import Image from "next/image";
import logoImg from "../../../public/plant-buds-green.svg";

export const MainHeader = () => {
  return (
    <div className="text-text-dark-forest bg-header-gray pt-10">
      <div className="flex flex-col items-center">
        <Image className="pl-8 pr-8 pt-8 pb-3" src={logoImg} alt="logotype" />
        <p className="font-thin text-xl">
          &quot;planting a smile on your face&quot;
        </p>
      </div>
    </div>
  );
};
