"use client";

import { checkPostal } from "@/actions";
import { FeedbackDialog } from "./FeedbackDialog";
import { useFormState } from "react-dom";
import { useState } from "react";
import Button from "../Button";

export const PostalNumberForm = () => {
  const [outcome, formAction] = useFormState(checkPostal, "success");
  const [feedbackDialogOpen, setFeedbackDialogOpen] = useState(false);

  return (
    <div className="bg-light-green p-8 font-thin">
      <p className="text-3xl text-center">Se om vi finns i ditt område!</p>
      <form
        action={(formData) => {
          formAction(formData);
          setFeedbackDialogOpen(true);
        }}
        className="text-leaf-green max-w-screen-sm mx-auto flex flex-row md:flex-row gap-3 justify-center p-2"
      >
        <input
          id="#postalcode"
          name="postalnumber"
          className="pt-1 pl-2 w-full md:max-w-max"
          type="text"
          placeholder="Postnummer"
          //TODO: add client side validation
          required
          minLength={5}
          maxLength={6}
        />
        <Button
          type="submit"
          variant="secondary"
          className="bg-gray-300 text-white"
        >
          Visa
        </Button>
        <FeedbackDialog
          outcome={outcome}
          open={feedbackDialogOpen}
          onClose={() => {
            setFeedbackDialogOpen(false);
          }}
        />
      </form>
    </div>
  );
};
