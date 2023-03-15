import React from "react";
import { ReactDOM } from "react";
import Beach from "../../../css/img/beach1.jpg";
export const Service = (prop) => {
  return (
    <div data-name="service" ref={prop.service_ref} className="desk_service">
      {prop.isanimated.service && <img src={Beach} data-name="beach" />}
      {
        // prettier-ignore
        prop.isanimated.service &&
        <section>
          <h2>
            <span className="s1">
              SERVICE <span className="sm">OFFERS</span>
            </span>
            <span className="s1">WE PROVIDE</span>
          </h2>
          <h3>
            We are commited to providing the best Nigerian service to our
            Royalties, with 24hrs dedication to all our customers concerns and
            comfort, we are the best around!!.
          </h3>
          <div className="btns">
            <button>
              <h4>24hrs ROOM SERVICE</h4>
            </button>
            <button>
              <h4>OPEN & CLOSED BAR</h4>
            </button>
            <button>
              <h4>AFRICAN & INT'L DISHES </h4>
            </button>
            <button>
              <h4>24HRS ELECTRICITY </h4>
            </button>
          </div>
        </section>
      }
    </div>
  );
};
