import React from "react";
import { ReactDOM } from "react-dom/client";
import { Mobile } from "./mobile/Main";
import { Desktop } from "./desktop/Main";
import { createRoot } from "react-dom/client";
import { useMediaQuery } from "react-responsive";
import { RoomBook } from "./bookroom/main";

const App = () => {
  const isMobile = useMediaQuery({ maxWidth: 540 });
  {
    return <RoomBook />;
  }
};

const root = createRoot(document.querySelector(".app"));
root.render(<App />);

// return isMobile ? <Mobile /> : <Desktop />;
