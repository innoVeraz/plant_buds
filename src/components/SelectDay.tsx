"use client";

import { Slot, getTimeSlots } from "@/actions/getTimeSlots";
import { CalenderNav } from "./Nav";
import TimeSlots from "./TimeSlots";
import { useEffect, useState } from "react";

type Props = {
  initialSlots: Slot[];
};

export const SelectDay = ({ initialSlots }: Props) => {
  const [slots, setSlots] = useState(initialSlots);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const getSlots = async () => {
      const updatedSlots = await getTimeSlots(date.getTime());
      setSlots(updatedSlots);
    };
    getSlots();
  }, [date]);

  return (
    <>
      <CalenderNav date={date} setDate={setDate} />
      <div className="text-center">
        <TimeSlots date={date} slots={slots} />
      </div>
    </>
  );
};
