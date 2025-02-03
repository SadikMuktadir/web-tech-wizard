import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const ServicesNavbar = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default ServicesNavbar;
