import Products from "@/app/booking/products/page";
import { useShoppingCartStore } from "@/app/booking/store";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import DeleteIcon from "../DeleteIcon";

export const Cart = () => {
  const cart = useShoppingCartStore();

  const totalAmount = () => {
    let totalPrice = 1500;

    cart.pots.forEach((pot) => {
      const potTotal = pot.amount * pot.price;
      totalPrice += potTotal;
    });
    return totalPrice;
  };

  return (
    <div className="flex flex-col gap-1 bg-light-green md:p-8 text-sm text-dark-forest md:rounded-lg">
      <h1 className="text-lg text-center mb-4">Varukorgen</h1>
      <div className="grid grid-cols-6 items-center">
        <p className="col-span-2">Omplantering</p>
        <div></div>
        <p className="col-span-1">1 st</p>
        <p className="col-span-1">1 500 kr</p>
        <div className="col-span-1 flex items-center justify-end"></div>
      </div>

      <p>Datum: {cart.slot?.date?.toLocaleDateString?.()}</p>
      <p>Tid: {getSlotTime(cart.slot?.number!)}</p>
      <input type="hidden" name="date" value={cart.slot?.date.toISOString()} />
      <input type="hidden" name="slot" value={cart.slot?.number} />

      {cart.pots.map((pot) => (
        <div className="grid grid-cols-6 items-center" key={pot.id}>
          <div className="col-span-1">
            <Image
              src={pot.img_url!}
              alt={pot.description!}
              width={50}
              height={50}
            />
          </div>
          <div className="col-span-2 border-cyan-900 pl-1">{pot.name}</div>
          <div className="col-span-1">{pot.amount} st</div>
          <div className="col-span-1">{pot.price} kr</div>
          <div className="col-span-1 flex items-center justify-end">
            <FontAwesomeIcon
              onClick={() => cart.removePot(pot.id)}
              className="text-dark-forest opacity-70 cursor-pointer"
              icon={faTrashCan}
            />
          </div>
          <input
            name="products"
            type="hidden"
            value={`${pot.id}/${pot.amount}`}
          />
        </div>
      ))}

      <div className="border-t border-gray-900">
        <p className="font-bold text-lg text-leaf-green pt-4">
          Totalt att betala: {totalAmount()} kr
        </p>
      </div>
    </div>
  );
};

export function getSlotTime(slot: number) {
  switch (slot) {
    case 1:
      return "08:00 - 12:00";
    case 2:
      return "13:00 - 17:00";
    case 3:
      return "18:00 - 22:00";
    default:
      break;
  }
}
