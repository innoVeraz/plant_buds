"use client";

import { useShoppingCartStore } from "@/app/booking/store";

const PlantPicker = () => {
  const cart = useShoppingCartStore();
  return (
    <div className="flex">
      <p>Väl antal plantor för omplantering</p>
      <button onClick={cart.decreasePlants}>-</button>
      <input
        defaultValue={cart.plants}
        type="text"
        id="small-input"
        className="block w-10 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
      <button onClick={cart.increasePlants}>+</button>
    </div>
  );
};

export default PlantPicker;
