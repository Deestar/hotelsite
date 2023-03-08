import React, { useEffect } from "react";
import { ReactDOM } from "react-dom/client";
import { Intro } from "./component/Intro";
import { Discount } from "./component/discount";
import { Option } from "./component/option";
import { Special } from "./component/special";
import { Foot } from "./component/footer";
import { SideMenu } from "./component/Sidemenu";
import { useState } from "react";
import { useRef } from "react";
export let Mobile = () => {
  const cont = useRef(null);
  const [menu, setMenu] = useState(false);
  const menuClick = () => setMenu((prev) => !prev);
  return (
    <div className="mobile_cont" ref={cont}>
      <Intro handlemenu={menuClick} />
      <Discount />
      <Option />
      <Special />
      <Foot />
      <SideMenu handlemenu={menuClick} menu={menu} />
    </div>
  );
};
