import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";

export const BottomNav = () => {
  return (
    <div className="flex gap-2 bg-sec-mg justify-center text-white">
      <ChevronLeftIcon />
      <p>Gå tillbaka</p>
      <p>Gå vidare</p>
      <ChevronRightIcon />
    </div>
  );
};
