import React from "react";
import { ReactDOM } from "react-dom/client";

export const Popular = ({ img, price, cutoff, description, d }) => {
  return (
    <div className={d ? "desk_slide_cont" : "slide_cont"}>
      <img src={img} />
      <div>
        &#8358;{price} <span>&#8358;{cutoff} </span>
      </div>
      <h2>{description}</h2>
    </div>
  );
};
