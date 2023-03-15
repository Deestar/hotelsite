import React from "react";
import { ReactDOM } from "react-dom/client";

export const Other = (prop) => {
  return (
    <div className="desk_other" data-name="special" ref={prop.special_ref}>
      <section
        className={prop.isanimated.special ? "popular shaky" : "popular"}
      >
        <h3>SPECIAL OFFERS</h3>
        <h4>
          Get more value for your money with our special rooms, tailoured to
          meet your unique needs and preferences
        </h4>
        <button>
          <h4>SPECIAL OFFERS &rarr;</h4>
        </button>
      </section>
      <section
        className={prop.isanimated.special ? "location shaka" : "location"}
      >
        <h3>OUR LOCATION</h3>
        <h4>
          Our hotel is located at Egbeda, A top spot on Lagos Mainland, one of
          the city's main roads
        </h4>
        <a href="">LOCATE US &rarr;</a>
      </section>
    </div>
  );
};
