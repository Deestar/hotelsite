import React, { useEffect } from "react";
import { ReactDOM } from "react-dom/client";
import { Intro } from "./component/Intro";
import { Discount } from "./component/discount";
import { Option } from "./component/option";
import { Special } from "./component/special";
import { Foot } from "./component/footer";
import { SideMenu } from "./component/Sidemenu";
import { useState } from "react";
export let Mobile = () => {
  const [phoneui, setPhoneUi] = useState(0);
  useEffect(() => {
    const actualHeight = () => window.innerHeight - screen.availHeight;
    window.onresize = () => setPhoneUi(actualHeight);
    setPhoneUi(actualHeight);
  }, []);
  const [menu, setMenu] = useState(false);
  const menuClick = () => setMenu((prev) => !prev);
  // const uiheight = { "--height": `${phoneui}vh ` };
  document.documentElement.style.setProperty("--height", `${phoneui}vh `);
  return (
    <div className="mobile_cont">
      <Intro handlemenu={menuClick} />
      <Discount />
      <Option />
      <Special />
      <Foot />
      <SideMenu handlemenu={menuClick} menu={menu} />
    </div>
  );
};
