import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareFacebook,
  faSquareInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="absolute w-full">
      <footer className="bottom-0 z-50 bg-header-gray mt-10 mb-10">
        <p className="text-center">Följ oss på:</p>
        <div className="flex gap-3 justify-center">
          <FontAwesomeIcon className="w-10 h-10" icon={faSquareFacebook} />
          <FontAwesomeIcon className="w-10 h-10" icon={faSquareInstagram} />
        </div>
      </footer>
    </div>
  );
};

export default Footer;
