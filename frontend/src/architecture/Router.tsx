import { createBrowserRouter, redirect, RouterProvider } from "react-router";
import Home from "../pages/Home";
import Wrapper from "../components/Wrapper";
import Projects from "../pages/Projects";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Wrapper />,
    //errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: "health-test", element: <>OK</> },
      { path: "projects", element: <Projects /> },
      {
        path: "home",
        loader: () => redirect("/"),
      },
    ],
  },
]);

const Router = () => <RouterProvider router={router} />;

export default Router;
