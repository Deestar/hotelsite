import React from "react";
import { ReactDOM } from "react-dom/client";
export const Discount = (prop) => {
  return (
    <div
      ref={prop.d ? prop.specials_ref : null}
      className={prop.d ? "desk_discount" : "discount"}
      data-name="specials"
    >
      {(prop.isanimated ? prop.isanimated.specials : true) && (
        <div className={prop.d ? "desk_discount_text" : "discount_text"}>
          <h5>SPECIALS</h5>
          {prop.d ? (
            <h2>
              <span>STAY LONG SAVE MORE</span>
              <span>WITH OUR ROYAL PLANS</span>
            </h2>
          ) : (
            <h2>
              STAY LONG, SAVE MORE <br />
              WITH OUR ROYAL PLANS
            </h2>
          )}
          <h6>
            We offer special offers for our Royal customers with cut offs that
            saves your money while you enjoy more time with us
          </h6>
          <button>Special Offers &rarr;</button>
          {
            //  prettier-ignore
            !prop.d && <div className={prop.d ? "desk_d_price" : "d_price"}>
          <div className={prop.d ? "desk_p_no" : "p_no"}>
            <h1>
              10,000<span>&#8358;</span>
            </h1>
            <div>per day</div>
          </div>
            <div className="p_info">A 10% discount for Royal rooms</div>
        </div>
          }
        </div>
      )}
      <div className={prop.d ? "desk_discount_img" : "discount_img"}></div>
    </div>
  );
};
