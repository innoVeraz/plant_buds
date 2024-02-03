import { create } from "zustand";
import { persist } from "zustand/middleware";

type State = {
  plants: number;
  pots: {
    id: number;
    amount: number;
  }[];
  increasePlants: () => void;
  decreasePlants: () => void;
  addPot: (id: number) => void;
};

export const useShoppingCartStore = create<State>()(
  persist<State>(
    (set) => ({
      plants: 0,
      pots: [],
      increasePlants: () => set((state) => ({ plants: state.plants + 1 })),
      decreasePlants: () => set((state) => ({ plants: state.plants - 1 })),
      addPot: (id) =>
        set((state) => {
          let pots = structuredClone(state.pots);
          const index = state.pots.findIndex((pot) => pot.id === id);
          if (index !== -1) {
            pots = state.pots.map((item, i) =>
              i === index ? { ...item, amount: item.amount + 1 } : item
            );
          } else {
            pots.push({ id, amount: 1 });
          }
          return {
            pots,
          };
        }),
    }),
    { name: "shopping-cart" }
  )
);
