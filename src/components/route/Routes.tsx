import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayOut from "../layout/MainLayOut";
import Home from "../home/Home";
import ServicesNavbar from "../home/detailsSection/ServicesNavbar";
import MobileAndApp from "../home/detailsSection/MobileAndApp";
import Seo from "../home/detailsSection/Seo";
import GraphicsDesign from "../home/detailsSection/GraphicsDesign";
import AutoMation from "../home/detailsSection/AutoMation";
import FastAndSecure from "../home/detailsSection/FastAndSecure";
import Support from "../home/detailsSection/Support";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    children: [
      {
        path: "/",
        element: <Home children={undefined}></Home>,
      },
    ],
  },
  {
    path: "details",
    element: <ServicesNavbar></ServicesNavbar>,
    children: [
      {
        path: "mobileAndApp",
        element: <MobileAndApp></MobileAndApp>,
      },
      {
        path: "seo",
        element: <Seo></Seo>,
      },
      {
        path: "graphics",
        element: <GraphicsDesign></GraphicsDesign>,
      },
      {
        path: "automation",
        element: <AutoMation></AutoMation>,
      },
      {
        path: "fastAndSecure",
        element: <FastAndSecure></FastAndSecure>,
      },
      {
        path: "support",
        element: <Support></Support>,
      },
    ],
  },
]);

const Routes = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default Routes;
