import React from "react";
import { ReactDOM } from "react-dom/client";
import Boque from "../../css/img/bouque.png";
export const Foot = (prop) => {
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
        <a href="">BOOK &rarr;</a>
      </div>
    </footer>
  );
};
