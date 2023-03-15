import React, { useEffect } from "react";
import { useRef } from "react";
export const RoomSection = (prop) => {
  const main = useRef(null);
  const royal = useRef(null);
  const exiquite = useRef(null);
  const standard = useRef(null);
  const regular = useRef(null);
  const scrollToType = (event) => {
    event.preventDefault();
    const { textContent } = event.target;
    prop.setType(textContent);
    if (textContent === "ROYAL") {
      main.current.scrollLeft = royal.current.offsetLeft - 258;
    } else if (textContent === "EXIQUITE") {
      main.current.scrollLeft = exiquite.current.offsetLeft - 258;
    } else if (textContent === "REGULAR") {
      main.current.scrollLeft = regular.current.offsetLeft - 258;
    } else if (textContent === "STANDARD") {
      main.current.scrollLeft = standard.current.offsetLeft - 258;
    }
  };
  return (
    <div className="mid_side_desktop">
      <div className="header_desktop">
        <h2>AVAILBLE ROOMS</h2>
      </div>
      <div className="hotel_type_cont_desktop">
        <a
          href="#royal_desktop"
          className="hotel_type_desktop"
          onClick={scrollToType}
        >
          ROYAL
        </a>
        <a
          href="#exiquite_desktop"
          className="hotel_type_desktop"
          onClick={scrollToType}
        >
          EXIQUITE
        </a>
        <a
          href="#standard_desktop"
          className="hotel_type_desktop"
          onClick={scrollToType}
        >
          STANDARD
        </a>
        <a
          href="#regular_desktop"
          className="hotel_type_desktop"
          onClick={scrollToType}
        >
          REGULAR
        </a>
      </div>

      <div ref={main} className="main_rooms_cont_desktop">
        <div ref={royal} className="rooms_type_cont_desktop" id="royal_desktop">
          <div className="rooms_desktop">
            <div className="img_desktop img_royal_1"></div>
            <div className="decr_desktop">
              <b>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod.
              </b>
              <h2>
                &#8358;12,000<span>/night</span>
              </h2>
            </div>
          </div>
          <div className="rooms_desktop">
            <div className="img_desktop img_royal_2"></div>
            <div className="decr_desktop">
              <b>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod.
              </b>
              <h2>
                &#8358;12,000<span>/night</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="rooms_type_cont_desktop">
          <div className="rooms_desktop" ref={exiquite}>
            <div className="img_desktop img_exiquite_1"></div>
            <div className="decr_desktop">
              <b>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod.
              </b>
              <h2>
                &#8358;10,000<span>/night</span>
              </h2>
            </div>
          </div>
          <div className="rooms_desktop">
            <div className="img_desktop img_exiquite_2"></div>
            <div className="decr_desktop">
              <b>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod.
              </b>
              <h2>
                &#8358;10,000<span>/night</span>
              </h2>
            </div>
          </div>
        </div>
        <div
          ref={standard}
          className="rooms_type_cont_desktop"
          id="standard_desktop"
        >
          <div className="rooms_desktop">
            <div className="img_desktop img_standard_1"></div>
            <div className="decr_desktop">
              <b>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod.
              </b>
              <h2>
                &#8358;8,000<span>/night</span>
              </h2>
            </div>
          </div>
          <div className="rooms_desktop">
            <div className="img_desktop img_standard_2"></div>
            <div className="decr_desktop">
              <b>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod.
              </b>
              <h2>
                &#8358;8,000<span>/night</span>
              </h2>
            </div>
          </div>
          <div className="rooms_desktop">
            <div className="img_desktop img_standard_3"></div>
            <div className="decr_desktop">
              <b>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod.
              </b>
              <h2>
                &#8358;8,000<span>/night</span>
              </h2>
            </div>
          </div>
          <div className="rooms_desktop">
            <div className="img_desktop img_standard_4"></div>
            <div className="decr_desktop">
              <b>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod.
              </b>
              <h2>
                &#8358;8,000<span>/night</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="rooms_type_cont_desktop" id="regular_desktop">
          <div ref={regular} className="rooms_desktop">
            <div className="img_desktop img_regular_1"></div>
            <div className="decr_desktop">
              <b>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod.
              </b>
              <h2>
                &#8358;7,000<span>/night</span>
              </h2>
            </div>
          </div>
          <div className="rooms_desktop">
            <div className="img_desktop img_regular_2"></div>
            <div className="decr_desktop">
              <b>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod.
              </b>
              <h2>
                &#8358;7,000<span>/night</span>
              </h2>
            </div>
          </div>
          <div className="rooms_desktop">
            <div className="img_desktop img_regular_3"></div>
            <div className="decr_desktop">
              <b>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod.
              </b>
              <h2>
                &#8358;7,000<span>/night</span>
              </h2>
            </div>
          </div>
          <div className="rooms_desktop">
            <div className="img_desktop img_regular_4"></div>
            <div className="decr_desktop">
              <b>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod.
              </b>
              <h2>
                &#8358;7,000<span>/night</span>
              </h2>
            </div>
          </div>
        </div>
      </div>
      <a href="" className="restaurant_desktop">
        <div className="dish_img">
          <div className="shadow">
            WE SERVE DELICIOUS DELICACIES CLICK HERE TO ORDER
          </div>
        </div>
        <div className="drink_img">
          <div className="shadow">ORDER NOW!!!</div>
        </div>
      </a>
    </div>
  );
};
