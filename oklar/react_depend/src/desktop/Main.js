import React from "react";
import { ReactDOM } from "react-dom/client";
import { Intro } from "./component/intro";
import { Service } from "./component/service";
import { Other } from "./component/other";
import { Discount } from "../mobile/component/discount";
export const Desktop = () => {
  return (
    <div className="desktop_cont">
      <Intro />
      <Service />
      <Other />
      <Discount d={true} />
    </div>
  );
};
