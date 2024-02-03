import Image from "next/image";
import logoImg from "../../../public/flower-green.svg";
import {
  faBagShopping,
  faBars,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const MainHeader = () => {
  return (
    <div className="text-dark-forest pt-10">
      <div className="flex items-center justify-center text-3xl">
        {/* <FontAwesomeIcon
          visibility="hidden"
          width={30}
          className="text-dark-forest opacity-60 mb-7 mr-10"
          icon={faBars}
        />
        <FontAwesomeIcon
          visibility="hidden"
          width={30}
          className="text-dark-forest opacity-60 mb-8 mr-40"
          icon={faHouse}
        /> */}
        <h1 className="-mr-5">PLANT</h1>
        <Image
          className="mb-10"
          width={100}
          height={100}
          src={logoImg}
          alt="logotype"
        />
        <h1 className="-ml-4">BUDS</h1>

        {/* <FontAwesomeIcon
          width={30}
          className=" text-dark-forest opacity-60 mb-8 ml-40"
          icon={faBagShopping}
        /> */}
      </div>
    </div>
  );
};
