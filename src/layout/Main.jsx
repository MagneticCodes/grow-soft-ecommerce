import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../components/Shared/NavigationBar/NavBar";
import Footer from "../components/Shared/Footer/Footer";

function Main() {
  const location = useLocation();

  let themeColor;

  if ((location.pathname = "/home-two")) {
    themeColor = "#2D6F6D";
  }

  return (
    <div>
      <NavBar themeColor={themeColor} />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Main;
