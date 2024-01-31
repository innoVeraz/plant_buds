import { MessageForm } from "@/components/Form";
import DeliveryForm from "@/components/Form/DeliveryForm";
import { SmallHeader } from "@/components/Header/SmallHeader";
import { BottomNav } from "@/components/Nav/BottomNav";

const Checkout = () => {
  return (
    <div className="max-w-screen-lg m-auto">
      <div className="max-w-screen-sm m-auto">
        <SmallHeader>Leveransuppgifter</SmallHeader>
        <DeliveryForm />
        <MessageForm />
        <BottomNav />
      </div>
    </div>
  );
};

export default Checkout;
