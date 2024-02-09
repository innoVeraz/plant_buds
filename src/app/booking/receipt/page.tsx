import Image from "next/image";
import confetti from "../../../../public/confettibg.png";

const page = () => {
  return (
    <div className="relative min-h-screen bg-white mt-10">
      <Image
        src={confetti}
        alt="blommor mot en grön bakgrund"
        objectFit="cover"
        className="rounded-xl m-auto"
        height={700}
        width={700}
      />
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-4xl mb-4 p-8 rounded-xl bg-opacity-70 bg-white opacity-90 backdrop-filter backdrop-blur-lg inline-block ">
          Tack för din beställning!
        </h1>
      </div>
    </div>
  );
};

export default page;
