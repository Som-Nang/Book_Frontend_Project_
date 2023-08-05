import SmallNavbar from "./components/SmallNavbar.js";
import Navbar from "./components/Navbar.js";
import SideNav from "./components/SideNav.js";
import Footer from "./components/Footer.js";
import { useState } from "react";

import { Outlet } from "react-router-dom";
function App() {
  let [sideNavShow, setSideNavShow] = useState(false);

  const toggle = () => {
    setSideNavShow(!sideNavShow);
  };
  return (
    <div className="flex flex-col h-screen">
      <div
        className={`${
          sideNavShow
            ? "block fixed inset-0 bg-gray-900 z-50 bg-opacity-80"
            : "hidden"
        }`}
      >
        <SideNav toggle={toggle} />
      </div>

      <div className="hidden md:block">
        <SmallNavbar />
      </div>

      <div>
        <Navbar toggle={toggle} />
      </div>

      <div className="md- auto">
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
