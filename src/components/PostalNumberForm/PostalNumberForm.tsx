import { checkPostal } from "@/actions";
import { FeedbackDialog } from "./FeedbackDialog";
import { useFormState } from "react-dom";

export const PostalNumberForm = () => {
  const [outcome, formAction] = useFormState(checkPostal, "success");

  return (
    <div className="bg-sec-mg p-8 text-white font-thin text-xl">
      <p className="text-center p-2">
        Skriv in ditt postnummer för att se om vi jobbar i ditt område!
      </p>
      <form action={formAction} className="flex gap-3 justify-center p-2">
        <input
          name="postalnumber"
          className="pt-1 pl-2"
          type="text"
          placeholder="123 45"
        />
        <FeedbackDialog outcome={outcome} />
      </form>
    </div>
  );
};
