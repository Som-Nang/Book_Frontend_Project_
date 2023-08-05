import { Link } from "react-router-dom";

function Navbar({ toggle }) {
  const handleToggle = () => {
    toggle();
  };
  return (
    <div className="flex justify-center items-center h-auto bg-white">
      <div className="flex justify-between items-center p-10 w-full 2xl:px-0 2xl:w-8/12 2xl:max-auto">
        <div className="text-gray-700 font-bold font-serif text-2xl uppercase">
          <p>
            Norton <span className="text-blue-800">University</span>
          </p>
        </div>
        <div className="hidden md:flex items-center font-serif uppercase text-gray-700 text-lg font-semibold space-x-6">
          <Link className="focus:outline-none" to="/">
            Home
          </Link>
          <p>|</p>
          <Link className="focus:outline-none" to="/searchable">
            Search
          </Link>
          <p>|</p>
          <a
            href="https://www.norton-u.com/about/contact-us"
            className="focus:outline-none"
          >
            Contact Us
          </a>
          <p>|</p>
          <Link className="relative focus:outline-none" to="/get_account">
            <button
              id="button"
              className="bg-blue-800 text-white rounded-full p-1 px-3"
            >
              {" "}
              Get Account
            </button>
          </Link>
        </div>
        <div className="md:hidden" onClick={handleToggle}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-7 h-7 text-gray-900 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
