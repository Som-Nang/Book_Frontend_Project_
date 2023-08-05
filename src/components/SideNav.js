import { useNavigate } from "react-router-dom";

function SideNav({ toggle }) {
  const navigate = useNavigate();
  const handleNavigation = (path) => {
    navigate(path);
    toggle();
  };

  return (
    <div
      className="w-60 h-full shadow-md bg-white px-1 absolute"
      id="sidenavExample"
    >
      <div className="flex justify-between p-6">
        <p className="font-bold text-gray-900 text-lg md:text-3xl font-serif uppercase">
          Norton <span className="text-blue-800">University</span>
        </p>
        <svg
          onClick={toggle}
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 cursor-pointer text-gray-900"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 10h16M4 14h16M4 18h16"
          />
        </svg>
      </div>

      <ul className="relative">
        <li className="relative" id="sidenavEx1">
          <a
            href="#!"
            className="flex items-center w-full text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out cursor-pointer"
            data-mdb-ripple="true"
            data-mdb-ripple-color="dark"
            data-bs-toggle="collapse"
            data-bs-target="#collapseSidenavEx1"
            aria-expanded="true"
            aria-controls="collapseSidenavEx1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 mr-3"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1H3a1 1 0 01-1-1V4zM8 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1H9a1 1 0 01-1-1V4zM15 3a1 1 0 00-1 1v12a1 1 0 001 1h2a1 1 0 001-1V4a1 1 0 00-1-1h-2z" />
            </svg>
            <span>Navigation</span>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              className="w-3 h-3 ml-auto"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"
              ></path>
            </svg>
          </a>
          <ul
            className="relative accordion-collapse collapse"
            id="collapseSidenavEx1"
            aria-labelledby="sidenavEx1"
            data-bs-parent="#sidenavExample"
          >
            <li className="relative" onClick={() => handleNavigation("/")}>
              <button
                className="flex items-center w-full text-sm py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
                data-mdb-ripple="true"
                data-mdb-ripple-color="dark"
              >
                Home
              </button>
            </li>
            <li
              className="relative"
              onClick={() => handleNavigation("/searchable")}
            >
              <button
                className="flex items-center w-full text-sm py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
                data-mdb-ripple="true"
                data-mdb-ripple-color="dark"
              >
                Search
              </button>
            </li>
            <li
              className="relative"
              onClick={() => handleNavigation("/contact")}
            >
              <button
                className="flex items-center w-full text-sm py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
                data-mdb-ripple="true"
                data-mdb-ripple-color="dark"
              >
                Contact
              </button>
            </li>
            <li
              className="relative"
              onClick={() => handleNavigation("/get_account")}
            >
              <button
                className="flex items-center w-full text-sm py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
                data-mdb-ripple="true"
                data-mdb-ripple-color="dark"
              >
                Get Account
              </button>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default SideNav;
