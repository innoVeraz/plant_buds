import {
  CalendarIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@radix-ui/react-icons";

export const CalenderNav = () => {
  return (
    <div className="flex gap-2 h-7 bg-sec-mg justify-center items-center text-white">
      <div>
        <ChevronLeftIcon className="mb-1" />
      </div>
      <div>tisdag</div>
      <CalendarIcon className="mb-1" />
      <ChevronRightIcon className="mb-1" />
    </div>
  );
};
