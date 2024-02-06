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
    <div className="bg-light-green font-thin pb-10 md:p-6 lg:p-8 rounded-md">
      <p className=" font-normal text-xl md:text-3xl text-center pt-8 pb-6">
        Se om vi finns i ditt område!
      </p>
      <form
        action={(formData) => {
          formAction(formData);
          setFeedbackDialogOpen(true);
        }}
        className="text-leaf-green max-w-screen-sm mx-auto flex flex-row md:flex-row gap-3 justify-center pb-8"
      >
        <input
          id="#postalcode"
          name="postalnumber"
          className="p-2 pl-2 w-56 text-mellow-gray font-medium"
          type="text"
          placeholder="Postnummer"
          //TODO: add client side validation
          required
          minLength={5}
          maxLength={6}
        />
        <Button type="submit" variant="gray">
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
