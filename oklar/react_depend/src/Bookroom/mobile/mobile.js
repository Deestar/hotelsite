import React, { useEffect } from "react";
import { ReactDOM } from "react-dom/client";
document.body.style.backgroundColor = "white";
import "../../css/mobilebook.css";
import { MobileHeader } from "./component/header";
import { MobileType } from "./component/roomtype";
import { MobileRooms } from "./component/room";
import { Special } from "../../Home/mobile/component/special";
import { useState } from "react";
import { BookPage } from "./component/bookpage";
import { SideMenu } from "../../Home/mobile/component/Sidemenu";
export const Mobile = () => {
  const [showmore, setShowMore] = useState(null);
  const [typestate, setTypeState] = useState("ROYAL");
  const [menu, setMenu] = useState(false);
  //Function to remove the sidemenu with state
  const switchMenu = () => {
    setMenu((prev) => !prev);
  };
  //Function to know the clicked body and set it to a state
  const changeBtn = (type) => {
    setTypeState(type);
  };
  //FUNCTION TO collect room information from onclick view here in boxtype component
  const roomDescription = (src, description, price, type) =>
    setShowMore({
      img: src,
      text: description,
      price: price,
      type: type,
    });
  //Function to reset showmore when we click on back button
  const resetshow = () => setShowMore(null);
  return showmore ? (
    <BookPage
      description={showmore.text}
      type={showmore.type}
      price={showmore.price}
      img={showmore.img}
      resetshow={resetshow}
    />
  ) : (
    <div className="mobilebook_maincont">
      <SideMenu menu={menu} handlemenu={switchMenu} />
      <MobileHeader showMenu={switchMenu} />
      <MobileType btntype={changeBtn} />
      <MobileRooms getshowmore={roomDescription} typenow={typestate} />
      <Special d={false} />
    </div>
  );
};
