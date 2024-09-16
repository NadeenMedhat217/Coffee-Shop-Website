import Home from "./pages/Home.jsx";
import Details from "./pages/Details.jsx";
import Order from "./pages/Order.jsx";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/details",
    element: <Details />,
  },
  {
    path: "/order",
    element: <Order />,
  },
]);
export default router;
