import React, { useCallback } from "react";
import { ReactDOM } from "react-dom/client";
import { Popular } from "./popular";
import { rooms } from "./roomarray";
export const Special = (prop) => {
  const TopRooms = rooms.map((ele, i) => (
    <Popular
      d={prop.d}
      img={ele.img}
      price={ele.price}
      cutoff={ele.cutoff}
      description={ele.description}
      key={i + 1}
    />
  ));
  return (
    <div className={prop.d ? "desk_special" : "special"}>
      <div className={prop.d ? "desk_s_title" : "s_title"}>
        <div>
          <h2>POPULAR</h2> <b>TOP ROOMS </b>
        </div>
        <button>Top Rooms &rarr;</button>
      </div>
      <div className={prop.d ? "desk_slideshow_cont" : "slideshow_cont"}>
        {TopRooms}
      </div>
    </div>
  );
};
