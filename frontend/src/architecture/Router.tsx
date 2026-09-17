import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "../pages/Home";
import Wrapper from "../components/Wrapper";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Wrapper />, // wrapper
    //errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> }, // Handles exact "/" path
      { path: "health-test", element: <>OK</> },

      // samples
      //{ path: "about", element: <About /> },
      //{ path: "user/:userId", element: <UserProfile /> },
    ],
  },
]);

const Router = () => <RouterProvider router={router} />;

export default Router;
