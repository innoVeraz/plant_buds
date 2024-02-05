"use client";

import Image from "next/image";
import logoImg from "../../../public/bigflower.png";
import {
  faBagShopping,
  faBars,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const MainHeader = () => {
  return (
    <div className="text-dark-forest pt-10">
      <div className="flex items-center justify-evenly">
        <FontAwesomeIcon
          width={30}
          className="text-dark-forest mb-8 "
          icon={faHouse}
        />
        <div className="flex items-center text-3xl">
          <h1 className="-mr-2 ">PLANT</h1>
          <Image
            className="mb-10"
            width={50}
            height={50}
            src={logoImg}
            alt="logotype"
          />
          <h1 className="-ml-1 ">BUDS</h1>
        </div>

        <div>
          {" "}
          <FontAwesomeIcon
            width={30}
            className=" text-dark-forest mb-8 "
            icon={faBagShopping}
          />
        </div>
      </div>
    </div>
  );
};
