"use client";

import Image from "next/image";
import plantbusImg from "../../public/plantbus.svg";
import peopleImg from "../../public/people.svg";
import bugImg from "../../public/bug.svg";

import { OurService, BugService } from "@/components/Text";
import { Button } from "@material-tailwind/react";
import { FirstHeader } from "@/components/Header/FirstHeader";
import PostalNumberForm from "@/components/Form/PostalNumberForm";

const Home = () => {
  return (
    <div className="">
      <FirstHeader />
      {/* <MenuNav /> */}
      <PostalNumberForm />
      <div className="max-w-screen-sm m-auto flex flex-col gap-4 pt-2">
        <section>
          <Image src={plantbusImg} alt="a truck filled with flowers" />
          <h1 className="text-6xl p-2 font-thin text-white">Vår Service</h1>
        </section>
        <section className="">
          <Image
            src={peopleImg}
            alt="a group of people posing for the camera with plants sorounding them"
          />
          <OurService />
          <Button className="bg-sec-mg  m-auto text-white">
            Se om vi kan komma hem till dig!
          </Button>
        </section>
        <section>
          <Image src={bugImg} alt="image of a cartoon bug in a plant pot" />
          <h1 className="text-6xl font-extralight ">Ohyra?</h1>
          <BugService />
        </section>

        <footer className="h-24">
          <p>instagram</p>
          <p>facebook</p>
        </footer>
      </div>
    </div>
  );
};

export default Home;
