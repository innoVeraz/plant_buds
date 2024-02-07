"use client";

import Button from "@/components/Button";
import { Cart, Contact, Payment } from "@/components/Form";
import { Delivery } from "@/components/Form/Delivery";
import { createOrder } from "@/actions";

const Checkout = () => {
  return (
    <div>
      <div className="max-w-screen-lg m-auto p-8">
        <h3 className="text-3xl text-center font-thin mb-10">
          Välkommen till kassan
        </h3>
        <form action={createOrder}>
          <div className="md:grid md:grid-cols-2 md:gap-6">
            <div>
              <Delivery />
              <Contact />
            </div>
            <div>
              <Cart />
            </div>
          </div>
          <div className="p-8 md:rounded-lg md:shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
            <Payment />
            <div className="flex justify-center p-8">
              <Button type="submit" variant="black">
                BESTÄLL
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
