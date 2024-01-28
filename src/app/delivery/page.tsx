import { MessageForm } from "@/components/Form";
import DeliveryForm from "@/components/Form/DeliveryForm";
import { SecondHeader } from "@/components/Header/SecondHeader";
import { BottomNav } from "@/components/Nav/BottomNav";

const Delivery = () => {
  return (
    <>
      <SecondHeader>Leveransuppgifter</SecondHeader>
      <DeliveryForm />
      <MessageForm />
      <BottomNav />
    </>
  );
};

export default Delivery;
