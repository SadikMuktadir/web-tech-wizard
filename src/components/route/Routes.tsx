import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayOut from "../layout/MainLayOut";
import Home from "../home/Home";
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
]);

const Routes = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default Routes;
