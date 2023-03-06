import React from "react";
import { ReactDOM } from "react-dom/client";
// import "../css/index.css";
import { Mobile } from "./mobile/Main";
import { createRoot } from "react-dom/client";
import { useMediaQuery } from "react-responsive";
const App = () => {
  const show = (event) => {
    event.target.classList.add("shine");
    if (event.target.nextSibling) {
      event.target.nextSibling.classList.add("shadow");
    }
    if (event.target.previousSibling) {
      event.target.previousSibling.classList.add("shadow");
    }
  };

  const unshow = (event) => {
    event.target.classList.remove("shine");
    if (event.target.nextSibling) {
      event.target.nextSibling.classList.remove("shadow");
    }
    if (event.target.previousSibling) {
      event.target.previousSibling.classList.remove("shadow");
    }
  };
  const error = "KINDLY VIEW ON YOUR MOBILE CURRENTLY WORKING ON DESKTOP";
  const each = error.split("").map((ele, i) => {
    if (ele === " ") {
      return (
        <span key={i + 1} onMouseOut={unshow} onMouseOver={show}>
          &nbsp;
        </span>
      );
    } else {
      return (
        <span key={i + 1} onMouseOut={unshow} onMouseOver={show}>
          {ele}
        </span>
      );
    }
  });

  const isMobile = useMediaQuery({ maxWidth: 500 });
  {
    return isMobile ? <Mobile /> : <div className="desktop">{each}</div>;
  }
};

const root = createRoot(document.querySelector(".app"));
root.render(<App />);
