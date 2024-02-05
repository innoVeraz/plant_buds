import { Slot } from "@/actions/getTimeSlots";
import { useShoppingCartStore } from "@/app/booking/store";

type Props = {
  slots: Slot[];
  date: Date;
};

const TimeSlots = ({ slots, date }: Props) => {
  const cart = useShoppingCartStore();

  return (
    <div>
      {slots.map((slot) => (
        <div
          onClick={() => {
            cart.setSlot({ date, number: slot.number });
          }}
          key={slot.time}
        >
          {slot.time}
        </div>
      ))}
    </div>
  );
};

export default TimeSlots;
