import React from "react";
import { ReactDOM } from "react-dom/client";

export const SideMenu = (prop) => {
  const goRoom = () => {
    location.assign("../../../index.html");
  };
  return (
    <div
      className={prop.menu ? "sidemenu_cont unhide" : "sidemenu_cont closeup"}
    >
      <div className={prop.menu ? "menu_cont openup" : "menu_cont closeup"}>
        <img
          className="brand"
          src="../../../react_depend/css/img/oklarpng.png"
        />
        <ul id={prop.menu ? "text-show" : "text-hide"}>
          <li>
            <img src="../../../react_depend/css/img/home.png" />
            <h4>HOME</h4>
          </li>
          <li onClick={goRoom}>
            <img src="../../../react_depend/css/img/book.png" />
            <h4>ROOMS</h4>
          </li>
          <li>
            <img src="../../../react_depend/css/img/restaurant.png" />
            <h4>RESTAURANT</h4>
          </li>
          <li>
            <img src="../../../react_depend/css/img/popular.png" />
            <h4>POPULAR</h4>
          </li>
          <li>
            <img src="../../../react_depend/css/img/contact.png" />
            <h4>MAP / CONTACT</h4>
          </li>
        </ul>
      </div>
      <img
        onClick={prop.handlemenu}
        src="../../../react_depend/css/img/cancel.png"
        className={prop.menu ? "close" : "hide"}
      />
    </div>
  );
};
