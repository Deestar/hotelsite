import React from "react";
import { ReactDOM } from "react-dom/client";
import { Nav } from "./Navbar";
export const Intro = () => {
  return (
    <div className="desk_intro_cont">
      <Nav
        brand={"../../../react_depend/css/img/oklarpng2.png"}
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
        <section>
          <div className="i r">
            <h3>NIGERIA.</h3>
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
            <h3>ROOM SERVICE</h3>
            <h3>ELECTRICITY</h3>
            <h3>AFRICAN AND INT'L DISH</h3>
            <h3>CLOSED AND OPEN BAR</h3>
          </div>
        </section>
      </div>
    </div>
  );
};
