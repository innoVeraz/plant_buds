"use client";

import Image from "next/image";
import plantbusImg from "../../public/heroImg.svg";
import womanImg from "../../public/plantbuddie.png";
import bugImg from "../../public/plantakuten.svg";

import { OurService, BugService } from "@/components/Text";
import { PostalNumberForm } from "@/components/PostalNumber";

const Home = () => {
  return (
    <div>
      <div id="postalnumber" className="flex flex-col gap-4">
        <div className="md:relative">
          <Image
            src={plantbusImg}
            alt="a truck filled with flowers"
            className="md:rounded-lg"
          />
          <div className=" md:absolute md:top-[50%] md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2">
            <PostalNumberForm />
          </div>
        </div>
        <div id="omplantering" />
        <br />
        <h1
          id="omplantering"
          className="text-center md:text-left text-4xl font-thin md:py-4 md:text-8xl "
        >
          Omplantering
        </h1>
        <div className="md:grid grid-cols-2">
          <Image
            className="object-cover w-full h-full md:rounded-lg"
            src={womanImg}
            alt="a woman planting indoor plants"
          />
          <OurService />
          <BugService />
          <Image
            className="md:rounded-lg"
            src={bugImg}
            alt="image of a cartoon bug in a plant pot"
          />
          <div className="flex justify-center"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
