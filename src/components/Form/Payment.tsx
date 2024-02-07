"use client";

export const Payment = () => {
  return (
    <div className="">
      <div>
        <div>
          <input
            aria-label="namn på kortet"
            name="cardname"
            type="text"
            id="kortnamn"
            className="bg-gray-50 border mb-4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Namn på kortet"
            required
          />
        </div>
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div>
            <input
              aria-label="kortnummer"
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

        <div className="grid gap-6 mb-6 md:grid-cols-2 ">
          <div>
            <input
              aria-label="giltigt till mån/år"
              name="valid"
              type="text"
              id="giltigt"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Giltigt M/Y"
              required
            />
          </div>
          <div>
            <input
              aria-label="cvc"
              name="cvc"
              type="text"
              id="CVC"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  w-40 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="CVC/CVV"
              required
            />
          </div>
        </div>
      </div>
    </div>
  );
};
