import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTiktok,
  faYoutube,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="pt-10 pb-5 border-t-4 border-teal-500 bg-gray-900 text-white">
      <div className="flex flex-col justify-between 2xl:w-8/12 2xl:mx-auto">
        <div className="grid grid-rows-4 gap-4 md:grid-rows-1 md:grid-cols-10 md:gap-8 px-10 2xl:px-0">
          <div className="col-span-3">
            <h3 className="capitalize font-bold text-2xl pb-6 tracking-wider font-serif">
              Norton <span className="main-color">University</span>
            </h3>
            <p className="text-sm">
              Norton University is the first private university in Cambodia,
              established on December 2, 1996 by Professor Chan Sok Khieng. It
              started to offer classes in December 1996 and was recognized as a
              university by sub-decree on September 18, 1997.{" "}
            </p>
          </div>

          <div className="col-span-2">
            <h3 className="capitalize font-bold text-1xl pb-4 tracking-wider">
              {" "}
              Useful link
            </h3>
            <ul className="text-sm">
              <li>Home</li>
              <li>About Us</li>
              <li>Easy to apply</li>
            </ul>
          </div>

          <div className="col-span-2">
            <h3 className="capitalize font-bold text-1xl pb-4 tracking-wider">
              {" "}
              Quick Search
            </h3>
            <ul className="text-sm">
              <li>Search</li>
              <li>Popular</li>
              <li>New added</li>
              <li>Most Relevant</li>
            </ul>
          </div>

          <div className="col-span-3">
            <h3 className="capitalize font-bold text-1xl pb-4 tracking-wider">
              {" "}
              Join Our Newsletter
            </h3>
            <p className="text-sm">
              We write rarely, but only the best content.
            </p>

            <div className="flex py-3">
              <input
                id="email"
                placeholder="email your address"
                className="w-full py-1 px-2 border text-gray-900 rounded-1 focus:outline-none placeholder:text-sm"
              />
              <label
                htmlFor="email"
                className="main-color text-white rounded-r px-3 py-2 cursor-pointer flex justify-center item-center"
              >
                {" "}
                Join
              </label>
            </div>

            <p className=" text-xs tracking-wider">
              We'll never share your detail{" "}
            </p>
          </div>
        </div>

        <div className="flex justify-between items-end mt-20 px-10 2xl:px-0">
          <div>
            <ul className="flex items-center space-x-3 text-sm">
              <li>
                <FontAwesomeIcon
                  icon={faFacebook}
                  className=" cursor-pointer"
                />
              </li>
              <li>
                <FontAwesomeIcon icon={faYoutube} className=" cursor-pointer" />
              </li>
              <li>
                <FontAwesomeIcon icon={faTiktok} className=" cursor-pointer" />
              </li>
              <li>
                <FontAwesomeIcon icon={faTwitter} className=" cursor-pointer" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
