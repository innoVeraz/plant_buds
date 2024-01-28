import React from "react";
import Modal from "@/components/Modal";

const PostalNumberForm = () => {
  return (
    <form action="submit" className="flex gap-3 justify-center">
      <input type="text" placeholder="123 45" />
      <div>
        <Modal />
      </div>
    </form>
  );
};

export default PostalNumberForm;
