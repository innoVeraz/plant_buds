import { Pot, useShoppingCartStore } from "@/app/booking/store";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type DeleteIconProps = {
  pot: Pot;
};

const DeleteIcon = ({ pot }: DeleteIconProps) => {
  const cart = useShoppingCartStore();
  return (
    <FontAwesomeIcon
      onClick={() => cart.removePot(pot.id)}
      className="text-dark-forest opacity-70 cursor-pointer"
      icon={faTrashCan}
    />
  );
};

export default DeleteIcon;
