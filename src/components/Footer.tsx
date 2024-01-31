import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareFacebook,
  faSquareInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="h-24 bg-header-gray">
      <p className="text-center">Följ oss på:</p>
      <div className="flex gap-3 justify-center">
        <FontAwesomeIcon className="w-10 h-10" icon={faSquareFacebook} />
        <FontAwesomeIcon className="w-10 h-10" icon={faSquareInstagram} />
      </div>
    </footer>
  );
};

export default Footer;
