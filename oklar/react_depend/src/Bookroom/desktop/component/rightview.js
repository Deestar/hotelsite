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
    } else {
      if (imgno > 3) {
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
  const getPrice = () => {
    let price;
    let descript;
    if (currentTypeName === "EXIQUITE") {
      price = "10,000";
      descript = "A description for EXIQUITE ROOMS";
    } else if (currentTypeName === "STANDARD") {
      price = "8,000";
      descript = "A description for STANDARD ROOMS";
    } else if (currentTypeName === "REGULAR") {
      price = "7,000";
      descript = "A description for REGULAR ROOMS";
    } else {
      price = "12,000";
      descript = "A description for ROYAL ROOMS";
    }
    return price;
  };
  const getDescription = () => {
    let descript;
    if (currentTypeName === "EXIQUITE") {
      descript = "A description for EXIQUITE ROOMS";
    } else if (currentTypeName === "STANDARD") {
      descript = "A description for STANDARD ROOMS";
    } else if (currentTypeName === "REGULAR") {
      descript = "A description for REGULAR ROOMS";
    } else {
      descript = "A description for ROYAL ROOMS";
    }
    return descript;
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
        <b>{getDescription()}</b>
        <h2>
          &#8358;{getPrice()}
          <span>/night</span>
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
