import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/Signup";
import Forgot from "../pages/forgot";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "Login",
    element: <Login />,
  },
  {
    path: "SignUp",
    element: <SignUp />,
  },
  {
    path: "forgot",
    element: <Forgot />,
  },
]);
