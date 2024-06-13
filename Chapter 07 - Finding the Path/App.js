import Body from "./Src/Componentrs/Body/Body";
import ReactDOM from "react-dom/client";
import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./Src/Componentrs/Error/Error";
import About from "./Src/Componentrs/About/About";
import ContactUs from "./Src/Componentrs/ContactUs/ContactUs";
import Header from "./Src/Componentrs/Headers/Header";
const FoodContainer = () => {
  return (
    <>
      <Header />;
      <Outlet />
    </>
  );
};

// call createBrowserRouter for routing different pages
const appRouter = createBrowserRouter([
  {
    path: "/", // show path for routing
    element: <FoodContainer />, // show component for particular path
    errorElement: <Error />, // show error component for path is different
    children: [
      // show children component for routing
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      // {
      //   path: "/restaurant/:resId",
      //   element: <RestaurantMenu />,
      // },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />); // render RouterProvider and use router as props and pass value appRouter
