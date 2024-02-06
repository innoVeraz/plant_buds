"use client";

import Button from "@/components/Button";
import { Cart, Contact, Payment } from "@/components/Form";
import { Delivery } from "@/components/Form/Delivery";
import { createOrder } from "@/actions";

const Checkout = () => {
  return (
    <div>
      <div className="max-w-screen-lg m-auto p-8">
        <h3 className="text-3xl text-center font-thin">
          Välkommen till kassan
        </h3>
        <form action={createOrder}>
          <Cart />
          <Delivery />
          <Contact />
          <Payment />

          <div className="flex justify-center p-8">
            <Button type="submit" variant="black">
              BESTÄLL
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
