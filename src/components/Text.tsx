import { Link as ScrollLink } from "react-scroll";
import Button from "@/components/Button";

export const OurService = () => {
  return (
    <div className="p-4 md:px-8 md:font-thin md:text-lg">
      <p>
        Att plantera om inomhusväxter kan kräva både tid, material och kunskap.
      </p>
      <p className="font-bold py-3">Vi kan göra allt det där åt dig!</p>
      <p>
        Du väljer en passande tid och så kommer våra kunniga florister hem till
        dig och planterar om.
      </p>
      <br />
      <p>
        De planteras om i antingen en kruka du redan har med ny jord och näring,
        eller ger dem mer plats att växa i en större kruka.
      </p>
      <br />
      <p>
        Vi har många fina krukor i vår shop som du kan välja att lägga till i
        samband med bokningen, vi tar med dem till omplanteringsdagen.
      </p>
      <div className="text-center py-8">
        <ScrollLink to="postalnumber" smooth={true} offset={-80}>
          <Button variant="primary">Se om vi kan komma hem till dig!</Button>
        </ScrollLink>
      </div>
    </div>
  );
};

export const BugService = () => {
  return (
    <div className="px-4 md:py-8">
      <h1 className="text-4xl font-thin text-center md:text-left md:py-4 md:text-8xl">
        Ohyra?
      </h1>
      <h3 className="pb-4 text-center text-xl md:text-left md:text-2xl">
        Har du fått oinbjudna gäster?
      </h3>
      <p className="md:text-lg md:font-thin md:pr-8">
        Vi identifierar och hjälper dig bli fri från ohyran. Vid behov avlägsnar
        vi plantorna åt dig för att se om vi kan rädda dem (beroende på hur
        stort angreppet är). <br />
        <br />
        Du får information och kunskap om hur du tar hand om angreppet på egen
        hand, produkter för behandling kan köpas direkt av våra florister.
      </p>
    </div>
  );
};
