import React from "react";

export const MobileBox = (prop) => {
  return (
    <div className="Mobilebox">
      <img src={prop.img} />
      <section className="Mobilebox_desrip">{prop.description}</section>
      <section className="Mobilebox_price">
        <h3>
          &#8358;{prop.price}
          <span>/night</span>
        </h3>
        <h4 onClick={prop.goto}>{prop.linkto} &rarr;</h4>
      </section>
    </div>
  );
};
