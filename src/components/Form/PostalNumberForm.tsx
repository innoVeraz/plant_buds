import React from "react";
import Modal from "@/components/Modal";

const PostalNumberForm = () => {
  return (
    <div className="bg-sec-mg p-8 text-white font-thin text-xl">
      <p className="text-center p-2">
        Skriv in ditt postnummer för att se om vi jobbar i ditt område!
      </p>
      <form action="submit" className="flex gap-3 justify-center p-2">
        <input className="pt-1 pl-2" type="text" placeholder="123 45" />
        <div>
          <Modal />
        </div>
      </form>
    </div>
  );
};

export default PostalNumberForm;
