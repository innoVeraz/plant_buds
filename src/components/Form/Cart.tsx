import { useShoppingCartStore } from "@/app/booking/store";

export const Cart = () => {
  const cart = useShoppingCartStore();

  return (
    <div className="">
      <p>Omplantering {cart.plants}</p>
      <p>Tid/Datum {cart.slot?.date.toLocaleDateString()}</p>
      <div>
        {cart.pots.map((pot) => (
          <>{pot.id}</>
        ))}
      </div>
      <input type="text" name="" id="" />
      <p></p>
      <button>ta bort</button>
    </div>
  );
};
