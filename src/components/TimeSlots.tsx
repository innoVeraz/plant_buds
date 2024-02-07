import { Slot } from "@/actions/getTimeSlots";
import { useShoppingCartStore } from "@/app/booking/store";

type Props = {
  slots: Slot[];
  date: Date;
};

const TimeSlots = ({ slots, date }: Props) => {
  const setSlot = useShoppingCartStore((state) => state.setSlot);
  const slot = useShoppingCartStore((state) => state.slot);

  return (
    <div>
      {slots.map((slot) => (
        <div
          onClick={() => {
            setSlot({ date, number: slot.number });
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
