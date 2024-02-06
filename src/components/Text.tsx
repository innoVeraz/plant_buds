import Link from "next/link";
import Button from "./Button";

export const OurService = () => {
  return (
    <div className="text-dark-forest p-4  text-lg md:px-8 md:font-thin md:text-xl">
      <p>
        <p>
          Att plantera om inomhusväxter kan kräva både tid, material och
          kunskap.
        </p>
        <p className="font-bold py-3">Vi kan göra allt det där åt dig!</p>
        Du väljer en passande tid och så kommer våra kunniga florister hem till
        dig och planterar om. <br />
        <br />
        De planteras om i antingen en kruka du redan har med ny jord och näring,
        eller ger dem mer plats att växa i en större kruka. <br />
        <br /> Vi har många fina krukor i vår shop som du kan välja att lägga
        till i samband med bokningen, vi tar med dem till omplanteringsdagen.
      </p>
      <div className="flex justify-center py-8">
        <Link href="#postalnumber">
          <Button variant="primary">Se om vi kan komma hem till dig!</Button>
        </Link>
      </div>
    </div>
  );
};

export const BugService = () => {
  return (
    <div className="text-dark-forest p-4 md:py-8">
      <h1 className="font-thin text-4xl text-center p-4 md:text-8xl">Ohyra?</h1>
      <h3 className="pb-4 text-center font-bold md:text-2xl">
        Har du fått oinbjudna gäster?
      </h3>
      <p className="md:text-xl sm:text-sm">
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

export const HowTo = () => {
  return (
    <div>
      <h3>Välj plantor och krukor</h3>
      <p>
        Välj det antal plantor du önskar få omplanterade, upp till 10 st totalt.
        Omplanteringen sker till en baskruka i ekologisk återvunnen plast och
        kostar 25kr till de mindre plantorna och 50kr till de större. Vi har
        även ett hundratal fina krukor i vår shop att beställa. OBS: Det går
        endast att beställa krukor i samband med en omplantering, krukorna tas
        med till ditt bokade omplanteringstillfälle.
      </p>
    </div>
  );
};
