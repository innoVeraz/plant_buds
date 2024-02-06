"use client";

import Image from "next/image";
import logoImg from "../../../public/bigflower.png";
import {
  faBagShopping,
  faBars,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MenuNav } from "../Nav";

export const MainHeader = () => {
  return (
    <div className="fixed z-50 pt-10 bg-white w-full text-dark-forest">
      <div className="flex items-center justify-around max-w-5xl m-auto">
        <FontAwesomeIcon
          width={30}
          className="md:text-xl mb-8 opacity-80"
          icon={faHouse}
        />
        <div className="flex items-center md:text-3xl">
          <h1 className="-mr-1 text-xl md:text-3xl">PLANT</h1>
          <Image
            className="mb-7 md:mb-7"
            width={40}
            height={40}
            src={logoImg}
            alt="logotype"
          />
          <h1 className="stext-xl md:text-3xl">BUDS</h1>
        </div>

        <div>
          {" "}
          <FontAwesomeIcon
            width={30}
            className="md:text-xl mb-8 opacity-80"
            icon={faBagShopping}
          />
        </div>
      </div>
      <MenuNav />
    </div>
  );
};
