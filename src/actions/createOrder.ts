"use server";

import prisma from "@/db";
import { redirect } from "next/navigation";
import { z } from "zod";

const userSchema = z.object({ email: z.string().email() });
const addressSchema = z.object({
  street: z.string(),
  postalcode: z.string(),
  city: z.string(),
});
const bookingSchema = z.object({
  date: z.string().transform((x) => new Date(x)),
  slot: z.string().transform(Number),
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
  const bookingModel = bookingSchema.parse({
    date: formData.get("date"),
    slot: formData.get("slot"),
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
      date: bookingModel.date.toISOString(),
      slot: bookingModel.slot,
      status: "created",
      bookings_products: {
        createMany: {
          data: products,
        },
      },
    },
  });

  redirect("/booking/receipt");
};
