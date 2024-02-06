import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const HouseIcon = () => {
  return (
    <Link href="/">
      <FontAwesomeIcon
        width={30}
        className="md:text-xl mb-8 opacity-80"
        icon={faHouse}
      />
    </Link>
  );
};

export default HouseIcon;
