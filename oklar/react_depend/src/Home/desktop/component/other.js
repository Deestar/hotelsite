import React from "react";
import { ReactDOM } from "react-dom/client";
import { useContext } from "react";
import { Setcurrent } from "../../../context";
export const Other = (prop) => {
  const showUser = useContext(Setcurrent);
  const toPopular = () => {
    showUser("POPULAR");
  };
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
        <button onClick={toPopular} style={{ cursor: "pointer" }}>
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
        <a href="https://www.google.com/maps/dir//Okla+Royal+Suite,+Egbeda,+1+-+3+Adenrele+St,+Lagos/@6.5949623,3.2729157,14.33z/data=!4m8!4m7!1m0!1m5!1m1!1s0x103b904e76f9b587:0xf74461f488aa9919!2m2!1d3.2937372!2d6.5970052">
          LOCATE US &rarr;
        </a>
      </section>
    </div>
  );
};
