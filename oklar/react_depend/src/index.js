import React, { useState } from "react";
import { ReactDOM } from "react-dom/client";
import { createRoot } from "react-dom/client";
import { Home } from "./Home/home";
import { RoomBook } from "./Bookroom/Book";
const App = () => {
  const [showHome, setShowHome] = useState(true);
  return <RoomBook />;
};
const root = createRoot(document.querySelector(".app"));
root.render(<App />);
