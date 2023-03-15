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
      images: ["./img/room1.jpg", "./img/room2.jpg"],
    },
    {
      name: "EXIQUITE",
      set: false,
      images: ["./img/room3.jpg", "./img/room4.jpg"],
    },
    {
      name: "STANDARD",
      set: false,
      images: [
        "./img/room5.jpg",
        "./img/room6.jpeg",
        "./img/room7.png",
        "./img/room8.jpeg",
      ],
    },
    {
      name: "REGULAR",
      set: false,
      images: [
        "./img/room9.png",
        "./img/room10.jpeg",
        "./img/room11.png",
        "./img/room12.jpeg",
      ],
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
