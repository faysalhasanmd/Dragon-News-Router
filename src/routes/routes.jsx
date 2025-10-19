import { createBrowserRouter } from "react-router";
import News from "../Pages/News";
import Authentication from "../Pages/Authentication";
import Root from "../Layout/Root";
import About from "../Pages/About";
import Career from "../Pages/Career";
import Categories from "../OutletPages/Categories";
import Home from "../OutletPages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/categories/:id",
        loader: () => fetch("/news.json"),
        element: <Categories></Categories>,
      },
    ],
  },
  {
    path: "/authentication",
    element: <Authentication></Authentication>,
  },
  {
    path: "/about",
    element: <About></About>,
  },
  {
    path: "/career",
    element: <Career></Career>,
  },
  {
    path: "/news",
    element: <News></News>,
  },
]);
