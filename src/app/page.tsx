import Image from "next/image";
import logoImg from "../../public/logo-white.svg";
import plantbusImg from "../../public/plantbus.svg";
import peopleImg from "../../public/people.svg";
import vermentImg from "../../public/verment.svg";

import Nav from "@/components/Nav";
import Modal from "@/components/Modal";
import { OurService, BugService } from "@/components/Text";

const Home = () => {
  return (
    <div className="text-white bg-pri-dg">
      <div className="flex justify-center">
        <Image src={logoImg} alt="logotype" />
      </div>
      <Nav />
      <Modal />
      <p>Skriv in ditt postnummer för att se om vi jobbar i ditt område</p>
      <form action="submit" className="flex gap-3 justify-center">
        <input type="text" placeholder="123 45" />
        <div>
          <button className="bg-gray-400">VISA</button>
        </div>
      </form>
      <section>
        <Image src={plantbusImg} alt="a truck filled with flowers" />
        <h1 className="text-6xl p-2 font-thin">Vår Service</h1>
      </section>
      <section className="bg-acc-lg">
        <Image
          src={peopleImg}
          alt="a group of people posing for the camera with plants sorounding them"
        />
        <OurService />
        <button className="bg-sec-mg p-1">
          Se om vi kan komma hem till dig!
        </button>
      </section>
      <section>
        <Image src={vermentImg} alt="image of a cartoon bug in a plant pot" />
        <h1 className="text-6xl font-extralight">Ohyra?</h1>
        <BugService />
      </section>

      <footer className="h-24">
        <p>instagram</p>
        <p>facebook</p>
      </footer>
    </div>
  );
};

export default Home;
