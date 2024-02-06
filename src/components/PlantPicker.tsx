"use client";

import { useShoppingCartStore } from "@/app/booking/store";
// import { useEffect, useState } from "react";

const PlantPicker = () => {
  const plants = useShoppingCartStore((state) => state.plants);
  const decreasePlants = useShoppingCartStore((state) => state.decreasePlants);
  const increasePlants = useShoppingCartStore((state) => state.increasePlants);
  return (
    <div>
      <p>Väl antal plantor för omplantering</p>
      <button onClick={decreasePlants}>-</button>
      <input
        defaultValue={plants}
        value={plants}
        type="text"
        id="small-input"
        className="block w-10 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
      <button onClick={increasePlants}>+</button>
    </div>
  );
};

export default PlantPicker;
