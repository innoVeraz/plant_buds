"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { Button } from "@material-tailwind/react";
import areaIcon from "../../public/area-icon.svg";
import Image from "next/image";

const DialogDemo = () => {
  const handleClick = () => {
    console.log("jag är klickad på");
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button onClick={handleClick} className="bg-gray-300 text-white">
          Visa
        </Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-black bg-opacity-60 fixed inset-0" />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
          <Dialog.Description className="font-thin mt-[10px] mb-5 text-2xl text-center leading-normal">
            <span>
              <Image src={areaIcon} alt="icon" /> Vi jobbar i ditt område!
            </span>
          </Dialog.Description>

          <div className="mt-[25px] flex justify-center">
            <Dialog.Close asChild>
              <Button className="bg-sec-mg hover:bg-green5 focus:shadow-green7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none">
                Gå vidare till bokning
              </Button>
            </Dialog.Close>
          </div>
          <Dialog.Close asChild>
            <button
              className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[20px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
              aria-label="Close"
            >
              stäng
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default DialogDemo;
