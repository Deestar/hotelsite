import React from "react";
import { ReactDOM } from "react-dom/client";

export const Nav = (prop) => {
  return (
    <nav className="desk_nav">
      <img className="desk_brand" src={prop.brand} />
      <ul>{prop.list}</ul>
    </nav>
  );
};
