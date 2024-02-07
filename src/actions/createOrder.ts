"use server";

import { booking_status, bookings } from "@prisma/client";
import prisma from "@/db";
import { z } from "zod";

const userSchema = z.object({ email: z.string() });
const addressSchema = z.object({
  street: z.string(),
  postalcode: z.string(),
  city: z.string(),
});

export const createOrder = async (formData: FormData) => {
  const userModel = userSchema.parse({
    email: formData.get("email"),
  });
  const addressModel = addressSchema.parse({
    street: formData.get("streetname"),
    postalcode: formData.get("postalnumber"),
    city: formData.get("city"),
  });
  const products = formData.getAll("products").map((value) => {
    const [id, amount] = value.toString().split("/");
    return {
      products_id: Number(id),
      amount: Number(amount),
    };
  });
  const user = await prisma.users.upsert({
    include: { address: true },
    where: {
      email: userModel.email,
    },
    update: {
      email: userModel.email,
      role: "customer",
    },
    create: {
      email: userModel.email,
      role: "customer",
      address: {
        create: {
          street: addressModel.street,
          postal_code: addressModel.postalcode,
          city: addressModel.city,
        },
      },
    },
  });
  const booking = await prisma.bookings.create({
    include: { bookings_products: true },
    data: {
      plant_amount: 1,
      address_id: user.address[0].id,
      user_id: user.id,
      // add date and slot
      status: "created",
      bookings_products: {
        createMany: {
          data: products,
        },
      },
    },
  });
  console.log("created/updated user", user);
  console.log("created booking", booking);
  console.log(formData);

  return true;
};
