import * as Dialog from "@radix-ui/react-dialog";
import areaIcon from "../../../public/area-icon.svg";
import Image from "next/image";
import { Button } from "@material-tailwind/react";
import Link from "next/link";

export const Error = () => {
  return (
    <>
      <div className=" text-dark-forest text-center py-8">
        <p className="text-pink-orange text-2xl">Hoppsan! Något gick fel</p>
        <br />
        <p>Försök igen om en stund.</p>
      </div>
      <div className="mt-[25px] flex justify-center">
        <Dialog.Close asChild></Dialog.Close>
      </div>
    </>
  );
};
