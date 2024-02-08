import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

type Props = {
  prev: string;
  next: string;
};

export const BottomNav = ({ prev, next }: Props) => {
  return (
    <div className="flex gap-2 h-10 bg-leaf-green justify-between items-center text-white font-thin text-xl p-3 pt-4x">
      <Link href={prev}>
        <div className="flex items-center">
          <ChevronLeftIcon className=" mb-1 w-8 h-8 cursor-pointer" />
          <p>Gå tillbaka</p>
        </div>
      </Link>
      <Link href={next}>
        <div className="flex items-center">
          <p>Gå vidare</p>
          <ChevronRightIcon className="mb-1 w-8 h-8 cursor-pointer" />
        </div>
      </Link>
    </div>
  );
};
