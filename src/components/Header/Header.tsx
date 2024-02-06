"use client";

import { MenuNav } from "../Nav";
import CartIcon from "../CartIcon";
import HouseIcon from "../HouseIcon";
import BrandLogo from "../BrandLogo";

export const Header = () => {
  return (
    <div className="fixed z-50 pt-10 bg-white w-full text-dark-forest">
      <div className="flex items-center justify-around max-w-5xl m-auto">
        <HouseIcon />
        <BrandLogo />
        <CartIcon />
      </div>
      <MenuNav />
    </div>
  );
};
