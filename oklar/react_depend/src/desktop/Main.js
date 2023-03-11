import React from "react";
import { ReactDOM } from "react-dom/client";
import { Intro } from "./component/intro";
import { Service } from "./component/service";
import { Other } from "./component/other";
import { Discount } from "../mobile/component/discount";
import { Special } from "../mobile/component/special";
import { Foot } from "../mobile/component/footer";
export const Desktop = () => {
  return (
    <div className="desktop_cont">
      <Intro />
      <Service />
      <Other />
      <Discount d={true} />
      <Special d={true} />
      <Foot d={true} />
    </div>
  );
};
