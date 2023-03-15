import React from "react";
import { ReactDOM } from "react-dom/client";
import { Mobile } from "./mobile/Main";
import { Desktop } from "./desktop/Main";
import { useMediaQuery } from "react-responsive";
export const Home = () => {
  const isMobile = useMediaQuery({ maxWidth: 540 });
  return isMobile ? <Mobile /> : <Desktop />;
};
