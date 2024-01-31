import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";

export const BottomNav = () => {
  return (
    <div className="flex gap-2 h-10 bg-leaf-green justify-between items-center text-white font-thin">
      <div className="flex items-center">
        <ChevronLeftIcon className=" mb-1 w-8 h-8 cursor-pointer" />
        <p>Gå tillbaka</p>
      </div>
      <div className="flex items-center">
        <p>Gå vidare</p>
        <ChevronRightIcon className="mb-1 w-8 h-8 cursor-pointer" />
      </div>
    </div>
  );
};
