import Image from "next/image";

import plantbusImg from "../../public/plantbus.svg";
import peopleImg from "../../public/people.svg";
import bugImg from "../../public/bug.svg";

import { OurService, BugService } from "@/components/Text";
import { MenuNav } from "@/components/Nav/MenuNav";
import { FirstHeader } from "@/components/Header/FirstHeader";

const Home = () => {
  return (
    <>
      <FirstHeader />
      <MenuNav />
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
        <Image src={bugImg} alt="image of a cartoon bug in a plant pot" />
        <h1 className="text-6xl font-extralight">Ohyra?</h1>
        <BugService />
      </section>

      <footer className="h-24">
        <p>instagram</p>
        <p>facebook</p>
      </footer>
    </>
  );
};

export default Home;
