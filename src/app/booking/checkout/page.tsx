"use client";

import Button from "@/components/Button";
import { Message, Payment } from "@/components/Form";
import { Delivery } from "@/components/Form/Delivery";
import { MainHeader } from "@/components/Header";

const Checkout = () => {
  return (
    <div className="max-w-screen-lg m-auto">
      <MainHeader />
      <h3>Välkommen till kassan</h3>
      <form action="submit">
        <Delivery />
        <Message />
        <Payment />
        <Button variant="checkout">BESTÄLL</Button>
      </form>
    </div>
  );
};

export default Checkout;
