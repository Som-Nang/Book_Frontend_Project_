import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTiktok,
  faYoutube,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
function SmallNavbar() {
  return (
    <div className="flex items-center py-3 bg-white border-b">
      <div className="flex justify-between w-full item-center px-10 font-serif 2xl:px-0 2xl:w-8/12 2xl:mx-auto">
        {/* <div className="flex item-center space-x-3 text-gray-900 font-medium">
          <Link className="focus:outline-none" to="/">
            Home
          </Link>
          <p>|</p>
          <Link className="focus:outline-none" to="#contact Us">
            Contact Us
          </Link>
          <p>|</p>
          <Link className="focus:outline-none" to="#about">
            About
          </Link>
        </div> */}
        <div>
          <ul className=" flex items-center space-x-2">
            <li className="group relative flex justify-center item-center h-4 w-4 bg-blue-500">
              <FontAwesomeIcon
                icon={faFacebook}
                className="absolute bottom-0 h-full text-sm cursor-pointer w-3/5 text-white group-hover:animate-translate-up-out-in"
              />
            </li>
            <li className="group relative flex justify-center item-center h-4 w-4 bg-red-500">
              <FontAwesomeIcon
                icon={faYoutube}
                className="absolute bottom-0 h-full text-sm cursor-pointer w-3/5 text-white group-hover:animate-translate-up-out-in"
              />
            </li>
            <li className="group relative flex justify-center item-center h-4 w-4 bg-sky-500">
              <FontAwesomeIcon
                icon={faTwitter}
                className="absolute bottom-0 h-full text-sm cursor-pointer w-3/5 text-white group-hover:animate-translate-up-out-in"
              />
            </li>
            <li className="group relative flex justify-center item-center h-4 w-4 bg-gray-900">
              <FontAwesomeIcon
                icon={faTiktok}
                className="absolute bottom-0 h-full text-sm cursor-pointer w-3/5 text-white group-hover:animate-translate-up-out-in"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default SmallNavbar;
