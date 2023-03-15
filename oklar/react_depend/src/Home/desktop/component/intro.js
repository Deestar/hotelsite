import React from "react";
import { ReactDOM } from "react-dom/client";
import { Nav } from "./Navbar";
import { useMediaQuery } from "react-responsive";
import Brand1 from "../../../css/img/oklarpng.png";
import Brand2 from "../../../css/img/oklarpng2.png";
import Room from "../../../css/img/room.jpg";
import { useContext } from "react";
import { Setcurrent } from "../../../context";
export const Intro = () => {
  const changeCurrent = useContext(Setcurrent);
  const toRoom = () => {
    changeCurrent("ROOMS");
  };
  //THIS IS TO LET NAVIGATION CHANGE STAE OF SHOWUSER IN INDEX PAGE
  const changeScreen = (event) => {
    const { textContent } = event.target;
    changeCurrent(textContent);
  };
  const isLarge = useMediaQuery({ minWidth: 1180 });
  return (
    <div className="desk_intro_cont">
      <Nav
        brand={isLarge ? Brand1 : Brand2}
        list={
          <>
            <li onClick={changeScreen}>HOME</li>
            <li onClick={changeScreen}>ROOMS</li>
            <li onClick={changeScreen}>POPULAR</li>
            <li onClick={changeScreen}>CONTACT</li>
            <li onClick={changeScreen}>LOUNGE</li>
          </>
        }
      />
      <div className="desk_intro">
        <img src={Room} />
        <h1>STAY WITH COMFORT</h1>
        <section>
          <div className="i r">
            <h3>NIGERIAN.</h3>
            <h3>ROYALTY.</h3>
            <h3>COMFORT.</h3>
          </div>
          <div className="i b">
            <h3>BOOK A ROOM TODAY</h3>
            <h5>
              Enjoy our top notch services during your holidays, buisness trips
              and couple time
            </h5>
            <a onClick={toRoom}>
              <h4>BOOK ROOM &rarr;</h4>
            </a>
          </div>
          <div className="i s">
            <li>ROOM SERVICE</li>
            <li>ELECTRICITY</li>
            <li>AFRICAN & INT'L DISH</li>
            <li>CLOSED & OPEN BAR</li>
          </div>
        </section>
      </div>
    </div>
  );
};
