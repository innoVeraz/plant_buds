import { products } from "@prisma/client";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type SelectedSlot = {
  number: number;
  date: Date;
};

type Pot = products & {
  amount: number;
};

type State = {
  plants: number;
  pots: Pot[];
  slot: SelectedSlot | null;
  increasePlants: () => void;
  decreasePlants: () => void;
  addPot: (pot: products) => void;
  setSlot: (slot: SelectedSlot) => void;
};

export const useShoppingCartStore = create<State>()(
  persist<State>(
    (set) => ({
      plants: 0,
      pots: [],
      slot: null,
      increasePlants: () => set((state) => ({ plants: state.plants + 1 })),
      decreasePlants: () => set((state) => ({ plants: state.plants - 1 })),
      addPot: (pot) =>
        set((state) => {
          let pots = structuredClone(state.pots);
          const index = state.pots.findIndex((x) => x.id === pot.id);
          if (index !== -1) {
            pots = state.pots.map((item, i) =>
              i === index ? { ...item, amount: item.amount + 1 } : item
            );
          } else {
            pots.push({ ...pot, amount: 1 });
          }
          return {
            pots,
          };
        }),
      setSlot: (slot) => set((state) => ({ slot })),
    }),
    { name: "shopping-cart" }
  )
);
