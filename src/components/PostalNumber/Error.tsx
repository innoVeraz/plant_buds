import * as Dialog from "@radix-ui/react-dialog";
import areaIcon from "../../../public/area-icon.svg";
import Image from "next/image";
import { Button } from "@material-tailwind/react";
import Link from "next/link";

export const Error = () => {
  return (
    <>
      <div className="font-thin mt-[10px] mb-5 text-2xl text-center leading-normal">
        Hoppsan! Något gick fel, försök igen om en stund.
      </div>
      <div className="mt-[25px] flex justify-center">
        <Dialog.Close asChild></Dialog.Close>
      </div>
    </>
  );
};
