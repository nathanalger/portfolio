import { createBrowserRouter, Outlet } from "react-router-dom";
import Home from "./pages/home";
import Projects from "./pages/Projects";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Outlet />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
    ],
  },
]);
