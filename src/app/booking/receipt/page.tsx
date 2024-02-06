import Image from "next/image";

const page = () => {
  return (
    <div>
      <h1>Tack {"order.name"} för din beställning!</h1>
      {/* <Image></Image> */}
      <h3>
        En bekräftelse med beställningsuppgifter skickas till
        {"order.email"}
      </h3>
    </div>
  );
};

export default page;
