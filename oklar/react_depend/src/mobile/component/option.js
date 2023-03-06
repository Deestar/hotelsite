import React from "react";
import { ReactDOM } from "react-dom/client";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
export let Option = () => {
  const [optinview, setOptInView] = useState(false);
  const option = useRef(null);
  useEffect(() => {
    //The intersection object is set to be observing but the function will run only when the inersection ratio reaches one of the threshold provided
    const observer = new IntersectionObserver(
      ([entry1]) => {
        if (entry1.intersectionRatio > 0.55) {
          setOptInView(true);
        } else if (entry1.intersectionRatio < 0.36) {
          setOptInView(false);
        }
      },
      {
        threshold: [0.36, 0.55],
      }
    );
    observer.observe(option.current);
  });
  return (
    <div ref={option} className="option">
      <div className="service">
        <h2>
          EXPERIENCES YOU GET WITH <span>OKLAR ROYAL</span>
        </h2>
        <div className="s_list">
          {
            //prettier-ignore
            optinview &&
            <div className="left ">
              <h6>24Hours Room service</h6> <h1>.</h1>
            </div>
          }
          {
            //prettier-ignore
            optinview &&
          <div className="right">
            <h6>African and Intl Dishes </h6>
            <h1>.</h1>
          </div>
          }
          {
            //prettier-ignore
            optinview &&
         <div className="right2">
            <h6>Closed & Open Bar </h6>
            <h1>.</h1>
          </div>
          }
        </div>
      </div>
    </div>
  );
};
