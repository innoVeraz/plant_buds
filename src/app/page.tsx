"use client";

import Image from "next/image";
import plantbusImg from "../../public/heroImg.svg";
import womanImg from "../../public/woman-planting.svg";
import bugImg from "../../public/bug.svg";

import Link from "next/link";
import { OurService, BugService } from "@/components/Text";
import { PostalNumberForm } from "@/components/PostalNumber";
import Button from "@/components/Button";

const Home = () => {
  return (
    <div className="text-dark-forest">
      <div id="postalnumber" className="flex flex-col gap-4">
        <div className="md:relative">
          <Image src={plantbusImg} alt="a truck filled with flowers" />
          <div className=" md:absolute md:top-[40%] md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2">
            <PostalNumberForm />
          </div>
          {/* <div id="replantscroll" className="h-40 "></div> */}
        </div>

        <h1
          id="replantscroll"
          className="text-4xl text-center font-thin md:py-4 md:text-8xl "
        >
          Omplantering
        </h1>

        <div className="md:grid grid-cols-2">
          <Image
            className="object-cover w-full h-full"
            src={womanImg}
            alt="a woman planting indoor plants"
          />
          <OurService />
          <BugService />
          <Image src={bugImg} alt="image of a cartoon bug in a plant pot" />
        </div>
      </div>
    </div>
  );
};

export default Home;
