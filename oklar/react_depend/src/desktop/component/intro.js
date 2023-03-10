import React from "react";
import { ReactDOM } from "react-dom/client";
import { Nav } from "./Navbar";
import { useMediaQuery } from "react-responsive";
export const Intro = () => {
  const isMobile = useMediaQuery({ minWidth: 1180 });
  return (
    <div className="desk_intro_cont">
      <Nav
        brand={
          isMobile
            ? "../../../react_depend/css/img/oklarpng.png"
            : "../../../react_depend/css/img/oklarpng2.png"
        }
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
        <img src="../../../react_depend/css/img/room3.jpg" />
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
            <a href="">
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
