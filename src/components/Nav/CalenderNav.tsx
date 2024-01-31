"use client";

import {
  CalendarIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@radix-ui/react-icons";
import { useState } from "react";

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type Props = {
  locale?: string;
  formatOptions?: Intl.DateTimeFormatOptions;
};

export const CalenderNav = ({
  locale,
  formatOptions = { weekday: "long" },
}: Props) => {
  const [isCalenderOpen, setIsCalenderOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const today = new Date();
  const formattedToday = today.toLocaleString(locale || "sv-SE", formatOptions);

  const toggleCalendar = () => {
    setIsCalenderOpen(!isCalenderOpen);
  };

  const toFuture = () => {
    const nextDay = new Date(selectedDate);
    nextDay.setDate(selectedDate.getDate() + 1);
    setSelectedDate(nextDay);
  };

  const toPast = () => {
    const nextDay = new Date(selectedDate);
    nextDay.setDate(selectedDate.getDate() - 1);
    setSelectedDate(nextDay);
  };
  const formattedSelectedDate = selectedDate.toLocaleDateString(
    locale || "sv-SE",
    {
      weekday: "long",
      ...formatOptions,
    }
  );

  return (
    <div>
      <div className="flex gap-2 h-10 bg-leaf-green justify-center items-center text-white font-thin">
        <div>
          <ChevronLeftIcon
            onClick={toPast}
            className="mr-10 mb-1 w-8 h-8 cursor-pointer"
          />
        </div>
        <p className="text-xl">{formattedSelectedDate}</p>
        <CalendarIcon
          onClick={toggleCalendar}
          className="mb-1 ml-4 w-5 h-5 cursor-pointer"
        />

        <ChevronRightIcon
          onClick={toFuture}
          className="ml-10 mb-1 w-8 h-8 cursor-pointer"
        />
      </div>
      {isCalenderOpen && (
        <div className="flex justify-center">
          <Calendar
            onChange={(date) => setSelectedDate(date as Date)}
            value={selectedDate}
            className="text-dark-forest rounded-xl border-slate-200"
          />
        </div>
      )}
    </div>
  );
};
