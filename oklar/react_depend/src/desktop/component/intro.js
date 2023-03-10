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
        <img src="../../../react_depend/css/img/img1.jfif" />
        <section>
          <div className="i-1">The Nigerian Royalty Comfort</div>
          <div className="i-2">
            <h3>BOOK A ROOM TODAY</h3>
            <h5>
              Enjoy our top notch services during your holidays, buisness trips
              and couple time
            </h5>
            <a href=""></a>
          </div>
          <div className="i-3">
            <h4>24HOURS ROOM SERVICE</h4>
            <h4>ELECTRICITY</h4>
            <h4>AFRICAN AND INT'L DISH</h4>
            <h4>CLOSED AND OPEN BAR</h4>
          </div>
        </section>
      </div>
    </div>
  );
};
