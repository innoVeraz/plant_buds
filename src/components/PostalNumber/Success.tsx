import * as Dialog from "@radix-ui/react-dialog";
import areaIcon from "../../../public/area-icon.svg";
import Image from "next/image";
import { Button } from "@material-tailwind/react";
import Link from "next/link";

export const Success = () => {
  return (
    <>
      <div className="font-thin mt-[10px] mb-5 text-2xl text-center leading-normal">
        <Image src={areaIcon} alt="icon" /> Vi jobbar i ditt område!
      </div>
      <div className="mt-[25px] flex justify-center">
        <Dialog.Close asChild>
          <Link href="/booking/products">
            <Button className="bg-leaf-green hover:bg-green5 focus:shadow-green7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none">
              Gå vidare till bokning
            </Button>
          </Link>
        </Dialog.Close>
      </div>
    </>
  );
};