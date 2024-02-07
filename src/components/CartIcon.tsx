import { useShoppingCartStore } from "@/app/booking/store";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const CartIcon = () => {
  const cart = useShoppingCartStore();
  return (
    <Link href="/booking/checkout">
      <div>
        <FontAwesomeIcon
          key={JSON.stringify(cart)}
          width={30}
          className="md:text-xl mb-8 opacity-80 cursor-pointer pulse-icon"
          icon={faBagShopping}
        />
      </div>
    </Link>
  );
};

export default CartIcon;
