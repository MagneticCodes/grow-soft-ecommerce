import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import HomePageTwo from "../pages/HomePageTwo/HomePageTwo";
import HomePageThree from "../pages/HomePageThree/HomePageThree";
import ContactPage from "../pages/Contact/ContactPage";
import Blog from "../pages/BlogPage/Blog";
import AboutPage from "../pages/About/AboutPage";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import AddToCart from "../pages/AddToCart/AddToCart";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/blogs",
        element: <Blog />,
      },
      {
        path: "/products/:id",
        element: <ProductDetails />,
      },
      {
        path: "/add-to-cart",
        element: <AddToCart />,
      },
    ],
  },
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/home-two",
        element: <HomePageTwo />,
      },
    ],
  },
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/home-three",
        element: <HomePageThree />,
      },
    ],
  },
]);
