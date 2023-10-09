import React from "react";
import Navbar from "./Navbar/Navbar";
import Screen1 from "./Screen1/Screen1.js";
import Screen2 from "./Screen2/Screen2.js";
import { Typography } from "antd";

const Main = () => {
  return (
    <div className="w-full">
      <Typography>
        <Navbar />
        <div className="flex py-1 px-4">
          <div className="sm:w-full lg:w-3/4">
            <Screen1 />
          </div>
          <div className="hidden sm:hidden lg:w-1/4 lg:block">
            <Screen2 />
          </div>
        </div>
      </Typography>
    </div>
  );
};

export default Main;
