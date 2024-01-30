import { MessageForm } from "@/components/Form";
import DeliveryForm from "@/components/Form/DeliveryForm";
import { SecondHeader } from "@/components/Header/SecondHeader";
import { BottomNav } from "@/components/Nav/BottomNav";

const Delivery = () => {
  return (
    <div className="max-w-screen-lg m-auto">
      <div className="max-w-screen-sm m-auto">
        <SecondHeader>Leveransuppgifter</SecondHeader>
        <DeliveryForm />
        <MessageForm />
        <BottomNav />
      </div>
    </div>
  );
};

export default Delivery;
