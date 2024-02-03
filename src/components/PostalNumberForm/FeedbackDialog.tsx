"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { Button } from "@material-tailwind/react";
import { useFormStatus } from "react-dom";
import { FeedbackDialogContent } from "./FeedbackDialogContent";
import { Outcome } from "./Outcome";

type Props = {
  outcome: Outcome;
};

export const FeedbackDialog = ({ outcome }: Props) => {
  const { pending } = useFormStatus();
  console.log(pending);

  return (
    <Dialog.Root open={pending}>
      <Dialog.Trigger asChild>
        <Button type="submit" className="bg-gray-300 text-white">
          Visa
        </Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-black bg-opacity-60 fixed inset-0" />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
          <FeedbackDialogContent loading={pending} outcome={outcome} />
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
