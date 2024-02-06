import Image from "next/image";
import logoImg from "../../public/bigflower.png";

const BrandLogo = () => {
  return (
    <div className="flex items-center md:text-3xl">
      <h1 className="-mr-1 text-xl md:text-3xl">PLANT</h1>
      <Image
        className="mb-7 md:mb-7"
        width={40}
        height={40}
        src={logoImg}
        alt="logotype"
      />
      <h1 className="text-xl md:text-3xl">BUDS</h1>
    </div>
  );
};

export default BrandLogo;
