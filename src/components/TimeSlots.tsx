import { Slot } from "@/actions/getTimeSlots";
import { useShoppingCartStore } from "@/app/booking/store";
import Button from "./Button";

type Props = {
  slots: Slot[];
  date: Date;
};

const TimeSlots = ({ slots, date }: Props) => {
  const setSlot = useShoppingCartStore((state) => state.setSlot);
  const slot = useShoppingCartStore((state) => state.slot);

  return (
    <div className="flex gap-4 justify-center">
      {slots.map((slot) => (
        <div
          className="py-8 md:p-8 md:text-xl"
          onClick={() => {
            setSlot({ date, number: slot.number });
          }}
          key={slot.time}
        >
          {slot.time}
          <div className="flex justify-center py-8 md:p-8">
            <Button variant="primary">Boka</Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TimeSlots;
