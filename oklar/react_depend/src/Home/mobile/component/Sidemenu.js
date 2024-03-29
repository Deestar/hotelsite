import React from "react";
import { ReactDOM } from "react-dom/client";
import Home from "../../../css/img/home.png";
import Book from "../../../css/img/book.png";
import Food from "../../../css/img/restaurant.png";
import Popular from "../../../css/img/popular.png";
import Contact from "../../../css/img/contact.png";
import Brand from "../../../css/img/oklarpng.png";
import Cancel from "../../../css/img/cancel.png";
import { Setcurrent } from "../../../context";
import { useContext } from "react";
export const SideMenu = (prop) => {
  const showUser = useContext(Setcurrent);
  const setDisplay = (event) => {
    const { childNodes } = event.target;
    const no = childNodes.length - 1;
    showUser(childNodes[no].textContent);
  };
  return (
    <div
      className={prop.menu ? "sidemenu_cont unhide" : "sidemenu_cont closeup"}
    >
      <div className={prop.menu ? "menu_cont openup" : "menu_cont closeup"}>
        <img className="brand" src={Brand} />
        <ul id={prop.menu ? "text-show" : "text-hide"}>
          <li onClick={setDisplay}>
            <img src={Home} />
            <h4>HOME</h4>
          </li>
          <li onClick={setDisplay}>
            <img src={Book} />
            <h4>ROOMS</h4>
          </li>
          <li onClick={setDisplay}>
            <img src={Food} />
            <h4>POPULAR</h4>
          </li>
          <li onClick={setDisplay}>
            <img src={Popular} />
            <h4>LOUNGE</h4>
          </li>
          <li onClick={setDisplay}>
            <img src={Contact} />
            <h4>CONTACT</h4>
          </li>
        </ul>
      </div>
      <img
        onClick={prop.handlemenu}
        src={Cancel}
        className={prop.menu ? "close" : "hide"}
      />
    </div>
  );
};
