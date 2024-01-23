import Image from "next/image";
import logoImg from "./logo-white.svg";
import plantbusImg from "./plantbus.svg";
import peopleImg from "./people.svg";
import vermentImg from "./verment.svg";

import Nav from "@/components/Nav";
import Modal from "@/components/Modal";

const Home = () => {
  return (
    <div className="text-white">
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
        <div className="text-pri-dg">
          <h2 className="font-bold text-2xl">En food truck för dina växter</h2>
          <p>
            Vi erbjuder omplantering för dina inomhusplantor. Under en timme tar
            våra kunniga planteringsproffs hand om upp till 10 st
            inomhusplantor. Planteras om i befintlig kruka med ny jord och
            näring, eller ger dem mer plats att växa i en ny kruka. Och du! Vi
            bjuder på standardkruka vid din första bokning! Du kan även
            botanisera bland ett 100-tal olika krukor som vi tar med oss vid
            planteringstillfället.
          </p>
        </div>
        <button className="bg-sec-mg p-1">
          Se om vi kan komma hem till dig!
        </button>
      </section>
      <section>
        <Image src={vermentImg} alt="image of a cartoon bug in a plant pot" />
        <h1 className="text-6xl font-extralight">Ohyra?</h1>
        <div className="bg-acc-lg w-100 h-150 text-pri-dg">
          Vi identifierar och hjälper dig bli fri från ohyran. Vid behov
          avlägsnar vi plantorna åt dig för att se om vi kan rädda dem beroende
          på hur stort angreppet är.
        </div>
      </section>

      <footer className="h-24">
        <p>instagram</p>
        <p>facebook</p>
      </footer>
    </div>
  );
};

export default Home;
