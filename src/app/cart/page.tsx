import Header from "@/components/Header";
import { HowTo } from "@/components/Text";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";

const Product = () => {
  return (
    <div>
      <Header>Varukorg</Header>
      <div className="bg-acc-lg">
        <HowTo />
      </div>
      <div className="">
        <p>Små plantor</p>
        <span>info</span>
        <input
          type="text"
          id="small-input"
          className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        <p>Stora plantor</p>
        <span>info</span>
        <div>
          <input
            type="text"
            id="small-input"
            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
      </div>
      <div className="shadow-md rounded-lg w-36 h-36 flex items-center">
        <p> Loopa ut krukor</p>
      </div>
      <div className="flex gap-2 bg-sec-mg justify-center text-white">
        <ChevronLeftIcon />
        <p>Gå tillbaka</p>
        <p>Gå vidare</p>
        <ChevronRightIcon />
      </div>
    </div>
  );
};

export default Product;
