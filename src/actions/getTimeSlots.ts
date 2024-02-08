"use server";

import prisma from "@/db";

export type Slot = {
  time: string;
  available: boolean;
  number: number;
};

export const getTimeSlots = async (timeStamp: number) => {
  const date = new Date(timeStamp);

  const bookings = await prisma.bookings.findMany({
    where: { date: { equals: date } },
  });

  const slots = [
    {
      time: "8:00 - 12:00",
      available: true,
      number: 1,
    },
    {
      time: "13:00 - 17:00",
      available: true,
      number: 2,
    },
    {
      time: "18:00 - 22:00",
      available: true,
      number: 3,
    },
  ];
  return slots;
};
