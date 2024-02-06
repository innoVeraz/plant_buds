"use client";

import Button from "@/components/Button";
import { Cart, Contact, Payment } from "@/components/Form";
import { Delivery } from "@/components/Form/Delivery";
import { MainHeader } from "@/components/Header";

const Checkout = () => {
  return (
    <div>
      <div className="max-w-screen-lg m-auto">
        <h3 className="text-3xl font-thin">Välkommen till kassan</h3>
        <form action="submit">
          <Cart />
          <Delivery />
          <Contact />
          <Payment />
          <Button variant="black">BESTÄLL</Button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
