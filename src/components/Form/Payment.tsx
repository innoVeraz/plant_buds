"use client";

export const Payment = () => {
  return (
    <div>
      <div>
        <div>
          <label
            htmlFor="kortnamn"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          ></label>
          <input
            type="text"
            id="kortnamn"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Namn på kortet"
            required
          />
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="kortnummer"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            ></label>
            <input
              name="cardnumber"
              autoComplete="cc-number"
              type="text"
              id="kortnummer"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Kortnummer"
              required
            />
          </div>
        </div>

        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="giltigt"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            ></label>
            <input
              type="text"
              id="giltigt"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Giltigt m/y"
              required
            />
          </div>
          <div>
            <label
              htmlFor="CVC"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            ></label>
            <input
              type="text"
              id="CVC"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="CVC/CVV"
              required
            />
          </div>
        </div>
      </div>
    </div>
  );
};
