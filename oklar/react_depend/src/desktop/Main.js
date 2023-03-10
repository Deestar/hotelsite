import React from "react";
import { ReactDOM } from "react-dom/client";
import { Intro } from "./component/intro";
import { Service } from "./component/service";
export const Desktop = () => {
  return (
    <div className="desktop_cont">
      <Intro />
      <Service />
    </div>
  );
};
