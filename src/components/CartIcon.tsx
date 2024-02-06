import { useShoppingCartStore } from "@/app/booking/store";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const CartIcon = () => {
  const pots = useShoppingCartStore((state) => state.pots);
  const amount = pots.reduce((prev, cur) => prev + cur.amount, 0);
  return (
    <Link href="/booking/checkout">
      <div>
        <FontAwesomeIcon
          key={amount}
          width={30}
          className="md:text-xl mb-8 opacity-80 cursor-pointer pulse-icon"
          icon={faBagShopping}
        />
      </div>
    </Link>
  );
};

export default CartIcon;
