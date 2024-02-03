"use client";

import Image from "next/image";
import plantbusImg from "../../public/heroImg.svg";
import womanImg from "../../public/woman-planting.svg";
import bugImg from "../../public/bug.svg";

import { OurService, BugService } from "@/components/Text";
import { MainHeader } from "@/components/Header/MainHeader";
import { PostalNumberForm } from "@/components/PostalNumber";
import Link from "next/link";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import { MenuNav } from "@/components/Nav";

const Home = () => {
  return (
    <div className="text-dark-forest">
      <MainHeader />
      <MenuNav />

      <div className="flex flex-col gap-4">
        <section>
          <Image src={plantbusImg} alt="a truck filled with flowers" />
          <PostalNumberForm />

          <Image src={womanImg} alt="a woman planting indoor plants" />

          <OurService />
        </section>
        <section className="">
          <h1 className="text-dark-forest text-6xl font-extralight ">Ohyra?</h1>
          <Image src={bugImg} alt="image of a cartoon bug in a plant pot" />

          <BugService />
          <Link href="#postalcode">
            <Button variant="primary">Se om vi kan komma hem till dig!</Button>
          </Link>
        </section>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
