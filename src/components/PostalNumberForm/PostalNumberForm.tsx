"use client";

import { checkPostal } from "@/actions";
import { FeedbackDialog } from "./FeedbackDialog";
import { useFormState } from "react-dom";

export const PostalNumberForm = () => {
  const [outcome, formAction] = useFormState(checkPostal, "success");

  return (
    <div className="bg-leaf-green p-8 text-white font-thin">
      <p className="text-center p-2 text:[12px]">
        Skriv in ditt postnummer för att se om vi jobbar i ditt område!
      </p>
      <form
        action={formAction}
        className="text-leaf-green max-w-screen-sm mx-auto flex flex-row md:flex-row gap-3 justify-center p-2"
      >
        <input
          id="#postalcode"
          name="postalnumber"
          className="pt-1 pl-2 w-full md:max-w-max"
          type="text"
          placeholder="Postnummer"
          //TODO: add client side validation
        />
        <FeedbackDialog outcome={outcome} />
      </form>
    </div>
  );
};
