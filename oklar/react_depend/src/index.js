import React, { createContext, useState } from "react";
import { ReactDOM } from "react-dom/client";
import { createRoot } from "react-dom/client";
import { Home } from "./Home/home";
import { RoomBook } from "./Bookroom/Book";
import { Setcurrent } from "./context";
import Loader from "./Bookroom/desktop/component/loader";
const App = () => {
  const [showUser, setShowUser] = useState([
    {
      HOME: false,
      ROOMS: true,
      POPULAR: false,
      LOUNGE: false,
    },
  ]);
  // THIS SETS THE HOME COMPONENT FROM ERROR PAGE
  const handleError = () => {
    setShowUser([
      {
        HOME: true,
        ROOMS: false,
        POPULAR: false,
        LOUNGE: false,
      },
    ]);
  };
  const errorStyle = {
    color: "rgba(39, 141, 204, 0.673)",
    backgroundColor: "transparent",
    padding: "6px",
    border: "3px solid powderblue",
    top: "70px",
    position: "absolute",
    cursor: "pointer",
  };
  //FUNCTION TO SET THE SCREEN TYPE
  const setDisplay = (screenType) => {
    setShowUser((prev) =>
      prev.map(() => ({
        HOME: false,
        ROOMS: false,
        POPULAR: false,
        LOUNGE: false,
        [screenType]: true,
      }))
    );
  };
  // TO SET LOADER
  const [load, setLoad] = useState(true);
  // window.onload = () => {
  //   setTimeout(() => {
  //     setLoad(false);
  //   }, 1500);
  // };

  return (
    <Setcurrent.Provider value={setDisplay}>
      {/* {load && <Loader />} */}
      {showUser[0].HOME ? (
        <Home />
      ) : showUser[0].ROOMS ? (
        <RoomBook />
      ) : (
        <div
          style={{
            margin: "20px",
            fontFamily: "helvetica",
            fontWeight: "600",
            fontSize: "clamp(15px,1.3vw,24px)",
          }}
        >
          THIS PAGE IS NOT AVAILABLE YET
          <br />
          <a style={errorStyle} onClick={handleError}>
            GO TO HOME PAGE &rarr;
          </a>
        </div>
      )}
    </Setcurrent.Provider>
  );
};
const root = createRoot(document.querySelector(".app"));
root.render(<App />);
