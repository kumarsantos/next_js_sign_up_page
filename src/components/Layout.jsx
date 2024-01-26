import React from "react";
import Navbar from "./Navbar";

const PrivateLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div>{children}</div>
    </div>
  );
};

export default PrivateLayout;
