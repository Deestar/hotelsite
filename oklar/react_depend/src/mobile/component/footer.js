import React from "react";
import { ReactDOM } from "react-dom/client";

export const Foot = () => {
  return (
    <footer>
      <div className="img_text">
        <img src="../../../react_depend/css/img/bouque.png" />
        <h1>CALL FOR BOOKING</h1>
      </div>
      <div className="contact">
        <div className="num">
          <div></div>
          <h6>07085211698</h6>
        </div>
        <a href="">BOOK &rarr;</a>
      </div>
    </footer>
  );
};
