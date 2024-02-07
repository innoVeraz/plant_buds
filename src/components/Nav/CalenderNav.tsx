"use client";

import {
  CalendarIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@radix-ui/react-icons";
import { Dispatch, SetStateAction, useState } from "react";

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export type Props = {
  locale?: string;
  formatOptions?: Intl.DateTimeFormatOptions;
  date: Date;
  setDate: Dispatch<SetStateAction<Date>>;
};

export const CalenderNav = ({
  locale,
  formatOptions = { weekday: "long" },
  date,
  setDate,
}: Props) => {
  const [isCalenderOpen, setIsCalenderOpen] = useState(false);

  const today = new Date();
  const formattedToday = today.toLocaleString(locale || "sv-SE", formatOptions);

  const toggleCalendar = () => {
    setIsCalenderOpen(!isCalenderOpen);
  };

  const nextDayClick = () => {
    const nextDay = new Date(date);
    nextDay.setDate(date.getDate() + 1);
    setDate(nextDay);
  };

  const PrevDayClick = () => {
    const prevDay = new Date(date);
    prevDay.setDate(date.getDate() - 1);
    setDate(prevDay);
  };
  const formattedDate = date.toLocaleDateString(locale || "sv-SE", {
    weekday: "long",
    ...formatOptions,
  });

  return (
    <div>
      <div className="flex gap-2 justify-center items-center h-10 mt-4  font-thin  ">
        <div>
          <ChevronLeftIcon
            onClick={PrevDayClick}
            className="mr-20 mb-1 w-8 h-8 cursor-pointer"
          />
        </div>
        <p className="text-xl">{formattedDate}</p>
        <CalendarIcon
          onClick={toggleCalendar}
          className="mb-1 ml-4 w-5 h-5 cursor-pointer"
        />

        <ChevronRightIcon
          onClick={nextDayClick}
          className="ml-20 mb-1 w-8 h-8 cursor-pointer"
        />
      </div>
      {isCalenderOpen && (
        <div className="flex justify-center">
          <Calendar
            onChange={(date) => setDate(date as Date)}
            value={date}
            className="text-dark-forest rounded-xl mt-4"
          />
        </div>
      )}
    </div>
  );
};
