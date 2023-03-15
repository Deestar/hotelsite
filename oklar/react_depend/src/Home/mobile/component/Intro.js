import React from "react";
import { ReactDOM } from "react-dom/client";
import { Setcurrent } from "../../../context";
import { useContext } from "react";
export let Intro = (prop) => {
  const showUser = useContext(Setcurrent);
  const toRoom = () => {
    showUser("ROOMS");
  };
  return (
    <div className="intro_cont">
      <div className="toggler" onClick={prop.handlemenu}>
        <div className="bck_img"></div>
      </div>
      <div className="intro-1">
        {/* //This is the image div for oklar hotel*/}
        <div></div>
        <h1>The Nigerian Royalty Comfort</h1>
      </div>
      <div className="intro-2">
        <h1>BOOK A ROOM TODAY</h1>
        <h4>
          Enjoy our top notch service during your holidays, buisness trips and
          couple time
        </h4>
        <a onClick={toRoom}>
          OUR ROOMS <span> &rarr; </span>
        </a>
      </div>
    </div>
  );
};
