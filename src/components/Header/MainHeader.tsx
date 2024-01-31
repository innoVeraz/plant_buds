import Image from "next/image";
import logoImg from "../../../public/plant-buds-green.svg";

export const MainHeader = () => {
  return (
    <div className="text-text-dark-forest bg-header-gray pt-10">
      <div className="flex flex-col items-center">
        <Image src={logoImg} alt="logotype" />
        <p className="font-thin text-2xl pt-8">
          &quot;planting a smile on your face&quot;
        </p>
      </div>
    </div>
  );
};
