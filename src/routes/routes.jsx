import { createBrowserRouter } from "react-router";
import News from "../Pages/News";
import Authentication from "../Pages/Authentication";
import Root from "../Layout/Root";
import About from "../Pages/About";
import Career from "../Pages/Career";
import Categories from "../OutletPages/Categories";
import Home from "../OutletPages/Home";
import Login from "../Firebase/Login";
import Register from "../Firebase/Register";
import AuthRoot from "../Layout/AuthRoot";
import NewsDetails from "../Pages/NewsDetails";
import PrivateRoute from "../Layout/PrivateRoute";
import Loading from "../Pages/Loading";

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
        hydrateFallbackElement: <Loading></Loading>,
        element: <Categories></Categories>,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthRoot></AuthRoot>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
    ],
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
    path: "/news-details/:id",
    loader: () => fetch("/news.json"),
    hydrateFallbackElement: <Loading></Loading>,
    element: (
      <PrivateRoute>
        <NewsDetails></NewsDetails>
      </PrivateRoute>
    ),
  },
  {
    path: "*",
    element: <h1>Error 404</h1>,
  },
]);
