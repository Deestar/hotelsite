import React from "react";
import Map from "../../../css/img/map.jpg";
export const BookPage = (prop) => {
  return (
    <main className="BookPage_cont">
      <section className="Bookpage_img_cont">
        <img src={prop.img} />
        <div className="Bookpage_return" onClick={prop.resetshow}></div>
      </section>

      <section className="Boopage_bookroom_cont">
        <h3>{prop.type}</h3>
        <h4>{prop.description}</h4>
        <a href="">
          <img src={Map} />
        </a>
        <div className="BookPage_last">
          <button>
            {prop.price}
            <span>/night</span>
          </button>
          <button>Book Now</button>
        </div>
      </section>
    </main>
  );
};
