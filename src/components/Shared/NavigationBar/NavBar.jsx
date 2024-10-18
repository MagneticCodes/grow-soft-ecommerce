import React from "react";
import TopNavBar from "./TopNavBar";
import MiddleNavBar from "./MiddleNavBar";
import BottomNavBar from "./BottomNavBar";

function NavBar({ themeColor }) {
  return (
    <div>
      <TopNavBar />
      <MiddleNavBar />
      <BottomNavBar themeColor={themeColor} />
    </div>
  );
}

export default NavBar;
