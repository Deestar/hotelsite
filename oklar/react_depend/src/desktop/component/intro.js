import React from "react";
import { ReactDOM } from "react-dom/client";
import { Nav } from "./Navbar";
export const Intro = () => {
  return (
    <div className="desk_intro">
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
    </div>
  );
};
