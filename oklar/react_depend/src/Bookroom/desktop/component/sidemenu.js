import React from "react";
import Brand from "../../../css/img/oklarpng4.png";
import { useContext } from "react";
import { Setcurrent } from "../../../context";
export default () => {
  const changeScreen = useContext(Setcurrent);
  const changeCurrent = (event) => {
    event.preventDefault();
    const { textContent } = event.target;
    changeScreen(textContent);
  };
  return (
    <div className="left_side_desktop">
      <div className="hotel_name_desktop">
        <img src={Brand}></img>
      </div>
      <div className="menu_bar_desktop">
        <a onClick={changeCurrent}>HOME</a>
        <a onClick={changeCurrent}>ROOMS</a>
        <a onClick={changeCurrent}>POPULAR</a>
        <a onClick={changeCurrent}>CONTACT</a>
        <a onClick={changeCurrent}>LOUNGE</a>
      </div>
      <a className="discount">
        <h2>
          GET UP TO
          <span
            style={{
              color: "red",
              fontWeight: "800",
              fontSize: "25px",
              marginLeft: "2px",
            }}
          >
            30%
          </span>
        </h2>
        <b>
          Check out our Top offers
          <br />
          up to 30% on room price
        </b>
      </a>
    </div>
  );
};
