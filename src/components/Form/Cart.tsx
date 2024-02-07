import Products from "@/app/booking/products/page";
import { useShoppingCartStore } from "@/app/booking/store";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

export const Cart = () => {
  const cart = useShoppingCartStore();

  const totalAmount = () => {
    let totalPrice = 0;

    cart.pots.forEach((pot) => {
      const potTotal = pot.amount * pot.price;
      totalPrice += potTotal;
    });
    return totalPrice;
  };

  return (
    <div className=" flex flex-col gap-4 bg-light-green p-8 text-sm text-dark-forest md:rounded-lg">
      {/* <p>Omplantering {cart.plants}</p> */}
      <p>Datum: {cart.slot?.date?.toLocaleDateString?.()}</p>
      <p>Tid: {getSlotTime(cart.slot?.number!)}</p>
      <input type="hidden" name="date" value={cart.slot?.date.toISOString()} />
      <input type="hidden" name="slot" value={cart.slot?.number} />

      {cart.pots.map((pot) => (
        <div className="grid grid-cols-5 items-center" key={pot.id}>
          <div>
            <Image
              src={pot.img_url!}
              alt={pot.description!}
              width={50}
              height={50}
            />
          </div>
          <div>{pot.name}</div>
          <div>{pot.amount} st</div>
          <div>{pot.price}kr</div>
          <span>
            <FontAwesomeIcon
              onClick={() => cart.removePot(pot.id)}
              className="text-dark-forest opacity-70 cursor-pointer"
              icon={faTrashCan}
            />
          </span>
          <input
            name="products"
            type="hidden"
            value={`${pot.id}/${pot.amount}`}
          />
        </div>
      ))}
      <div>
        <p className="font-bold">Totalt att betala: {totalAmount()} kr</p>
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
