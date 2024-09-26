import Home from "./pages/Home";
import Details from "./pages/Details";
import Order from "./pages/Order";
import Onboarding from "./pages/Onboarding";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Onboarding />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    // Add dynamic parameters for category, pageName, and id
    path: "/details/:category/:id",
    element: <Details />,
  },
  {
    path: "/order",
    element: <Order />,
  },
]);

export default router;
