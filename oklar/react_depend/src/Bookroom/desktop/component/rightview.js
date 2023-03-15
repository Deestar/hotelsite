import React from "react";
import Left from "../../../css/img/left.png";
import Right from "../../../css/img/right.png";
import { useState } from "react";
import { useEffect } from "react";
export const Rightview = ({ imgArray }) => {
  const [imgsrc, setImgSrc] = useState(null);
  const [imgno, setImgNo] = useState(0);
  const [currentTypeName, setCurrentTypeName] = useState(null);
  useEffect(() => {
    const currentType = imgArray.find((imgtypes) => imgtypes.set === true);
    setImgSrc(currentType.images[imgno]);
    setCurrentTypeName(currentType.name);
    if (currentType.name === "ROYAL" || currentType.name === "EXIQUITE") {
      if (imgno > 1) {
        setImgNo(0);
      }
    }
  }, [imgArray, imgno]);
  //Function to increase the index num of img
  const incrNo = () => {
    setImgNo((prev) => prev + 1);
  };
  const decrNo = () => {
    setImgNo((prev) => prev - 1);
  };
  return (
    <div className="right_side_desktop">
      <div className="right_img_cont">
        <img src={imgsrc} />
        <div className="direct">
          <img className="left" onClick={decrNo} src={Left} />
          <img className="right" onClick={incrNo} src={Right} />
        </div>
      </div>

      <div className="right_descr">
        <b>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod.
        </b>
        <h2>
          &#8358;12,000<span>/night</span>
        </h2>
      </div>
      <div className="right_price">
        <a className="btn_book">
          <button>BOOK NOW</button>
        </a>
      </div>
    </div>
  );
};
