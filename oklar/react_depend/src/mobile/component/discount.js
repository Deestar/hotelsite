import React from "react";
import { ReactDOM } from "react-dom/client";
export const Discount = () => {
  return (
    <div className="discount">
      <div className="discount_text">
        <h5>SPECIALS</h5>
        <h2>
          STAY LONG, SAVE MORE <br />
          WITH OUR <span>ROYAL</span> PLANS
        </h2>
        <h6>
          We offer special offers for our Royal customers with cut offs that
          saves your money while you enjoy more time with us
        </h6>
        <button>Special Offers &rarr;</button>
        <div className="d_price">
          <div className="p_no">
            <h1>
              10,000<span>&#8358;</span>
            </h1>
            <div>per day</div>
          </div>
          <div className="p_info">A 10% discount for Royal rooms</div>
        </div>
      </div>
      <div className="discount_img"></div>
    </div>
  );
};
