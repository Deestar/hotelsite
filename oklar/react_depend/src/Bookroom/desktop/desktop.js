import React from "react";
import { ReactDOM } from "react-dom/client";
import "../../css/desktopbook.css";
import Loader from "./component/loader";
import Sidemenu from "./component/sidemenu";
import { RoomSection } from "./component/room";
import { Rightview } from "./component/rightview";
import { useState } from "react";
export const Desktop = () => {
  const [type, setType] = useState([
    {
      name: "ROYAL",
      set: true,
      images: ["./img/room1.jpg"],
    },
    {
      name: "EXIQUITE",
      set: false,
      images: ["./img/room2.jpg"],
    },
    {
      name: "STANDARD",
      set: false,
      images: ["./img/room3.jpg"],
    },
    {
      name: "REGULAR",
      set: false,
      images: ["./img/room4.jpg"],
    },
  ]);
  // Fuction to set the "set" value to of type state to true
  const setImage = (imgtype) => {
    setType((prev) =>
      prev.map((roomtype) =>
        roomtype.name === imgtype
          ? {
              ...roomtype,
              set: true,
            }
          : {
              ...roomtype,
              set: false,
            }
      )
    );
  };
  return (
    <>
      <div className="main_cont_desktop">
        <Sidemenu />
        <RoomSection setType={setImage} />
        <Rightview imgArray={type} />
      </div>
    </>
  );
};
