import React from "react";
import Brand from "../../../css/img/oklarpng3.png";
export default () => {
  return (
    <div className="left_side_desktop">
      <div className="hotel_name_desktop">
        <img src={Brand}></img>
      </div>
      <div className="menu_bar_desktop">
        <a href="/projects/index.php">HOME</a>
        <a>ROOMS & RATE</a>
        <a>SPECIAL OFFERS</a>
        <a>LOCATION & CONTACT</a>
        <a>RESTAURANT</a>
      </div>
      <a className="discount">
        <h2>
          GET UP TO
          <span style={{ color: "red", fontWeight: "800", fontSize: "25px" }}>
            30%
          </span>
        </h2>
        <b>
          sign up for our special offer
          <br />
          up to 30% on room price
        </b>
      </a>
    </div>
  );
};
