"use client";

import Image from "next/image";
import plantbusImg from "../../public/hero-plantbus.svg";
import womanImg from "../../public/woman-planting.jpg";
import bugImg from "../../public/bug.svg";

import { OurService, BugService } from "@/components/Text";
import { Button } from "@material-tailwind/react";
import { MainHeader } from "@/components/Header/MainHeader";
import { PostalNumberForm } from "@/components/PostalNumberForm";
import Link from "next/link";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="text-dark-forest">
      <MainHeader />
      {/* <MenuNav /> */}

      <div className="flex flex-col gap-4">
        <section>
          <Image src={plantbusImg} alt="a truck filled with flowers" />
          <PostalNumberForm />
          <h2 className="font-thin text-6xl">En food truck för dina växter</h2>
          <Image src={womanImg} alt="a woman planting indoor plants" />

          <OurService />
        </section>
        <section className="">
          <h1 className="text-dark-forest text-6xl font-extralight ">Ohyra?</h1>
          <Image src={bugImg} alt="image of a cartoon bug in a plant pot" />

          <BugService />
          <Link href="#postalcode">
            <Button className="bg-leaf-green  m-auto text-white">
              Se om vi kan komma hem till dig!
            </Button>
          </Link>
        </section>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
