import React from "react";
import { ReactDOM } from "react-dom/client";
import Boque from "../../../css/img/bouque.png";
import { Setcurrent } from "../../../context";
import { useContext } from "react";
export const Foot = (prop) => {
  const showUser = useContext(Setcurrent);
  const toRoom = () => {
    showUser("ROOMS");
  };
  return (
    <footer>
      <div className={prop.d ? "desk_img_text" : "img_text"}>
        <img src={Boque} />
        <h1>CALL FOR BOOKING</h1>
      </div>
      <div className={prop.d ? "desk_contact" : "contact"}>
        <div className={prop.d ? "desk_num" : "num"}>
          <div></div>
          <h6>07011111111</h6>
        </div>
        <a onClick={toRoom}>BOOK &rarr;</a>
      </div>
    </footer>
  );
};
