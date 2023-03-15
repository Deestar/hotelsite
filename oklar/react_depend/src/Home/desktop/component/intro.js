import React from "react";
import { ReactDOM } from "react-dom/client";
import { Nav } from "./Navbar";
import { useMediaQuery } from "react-responsive";
import Brand1 from "../../../css/img/oklarpng.png";
import Brand2 from "../../../css/img/oklarpng2.png";
import Room from "../../../css/img/room.jpg";
export const Intro = () => {
  const isLarge = useMediaQuery({ minWidth: 1180 });
  return (
    <div className="desk_intro_cont">
      <Nav
        brand={isLarge ? Brand1 : Brand2}
        list={
          <>
            <li>HOME</li>
            <li>ROOMS</li>
            <li>POPULAR</li>
            <li>LOUNGE</li>
            <li>CONTACT</li>
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
            <a href="../../../room.html">
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
