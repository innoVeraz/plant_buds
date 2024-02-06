import * as Dialog from "@radix-ui/react-dialog";
import areaIcon from "../../../public/area-icon.svg";
import Image from "next/image";

import Link from "next/link";
import Button from "../Button";

export const Success = () => {
  return (
    <>
      <div className="font-thin py-8 md:text-2xl text-center">
        <div className="flex justify-center">
          <Image className="pb-6 mr-2" src={areaIcon} alt="icon" />
          <p>Vi jobbar i ditt område!</p>
          <div></div>
        </div>
      </div>
      <div className="flex justify-center pb-8">
        <Dialog.Close asChild>
          <Link href="/booking/appointment">
            <Button variant="primary">Gå vidare till bokning</Button>
          </Link>
        </Dialog.Close>
      </div>
    </>
  );
};
