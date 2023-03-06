import React, { useCallback } from "react";
import { ReactDOM } from "react-dom/client";
import { Popular } from "./popular";
import { rooms } from "./roomarray";
export const Special = () => {
  const TopRooms = rooms.map((ele, i) => (
    <Popular
      img={ele.img}
      price={ele.price}
      cutoff={ele.cutoff}
      description={ele.description}
      key={i + 1}
    />
  ));
  return (
    <div className="special">
      <div className="s_title">
        <div>
          <h2>POPULAR</h2> <b>TOP ROOMS </b>
        </div>
        <button>Top Rooms &rarr;</button>
      </div>
      <div className="slideshow_cont">{TopRooms}</div>
    </div>
  );
};
