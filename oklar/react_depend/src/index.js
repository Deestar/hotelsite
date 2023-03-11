import React from "react";
import { ReactDOM } from "react-dom/client";
import { Mobile } from "./mobile/Main";
import { Desktop } from "./desktop/Main";
import { createRoot } from "react-dom/client";
import { useMediaQuery } from "react-responsive";
const App = () => {
  const isMobile = useMediaQuery({ maxWidth: 520 });
  {
    return isMobile ? <Mobile /> : <Desktop />;
  }
};

const root = createRoot(document.querySelector(".app"));
root.render(<App />);
