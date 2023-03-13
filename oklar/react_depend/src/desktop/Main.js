import React, { useEffect } from "react";
import { ReactDOM } from "react-dom/client";
import { Intro } from "./component/intro";
import { Service } from "./component/service";
import { Other } from "./component/other";
import { Discount } from "../mobile/component/discount";
import { Special } from "../mobile/component/special";
import { Foot } from "../mobile/component/footer";
import { useRef } from "react";
import "../css/index.css";
import { useState } from "react";
export const Desktop = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const [animate, setAnimate] = useState({
    service: false,
    special: false,
    specials: false,
  });
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(({ target, isIntersecting, intersectionRatio }, i) => {
          if (intersectionRatio > 0.45 && target.dataset.name != "special") {
            setAnimate((prev) => ({ ...prev, [target.dataset.name]: true }));
          } else {
            if (target.dataset.name == "special" && intersectionRatio > 0.8) {
              setAnimate((prev) => ({
                ...prev,
                [target.dataset.name]: true,
              }));
            }
          }
        });
      },
      {
        threshold: [0.45, 0.8],
      }
    );
    [ref1.current, ref2.current, ref3.current].forEach((e) =>
      observer.observe(e)
    );
  }, []);
  return (
    <div className="desktop_cont">
      <Intro />
      <Service isanimated={animate} service_ref={ref1} />
      <Other isanimated={animate} special_ref={ref2} />
      <Discount isanimated={animate} specials_ref={ref3} d={true} />
      <Special d={true} />
      <Foot d={true} />
    </div>
  );
};
