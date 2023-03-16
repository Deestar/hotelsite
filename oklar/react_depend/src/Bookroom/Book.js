import React from "react";
import { ReactDOM } from "react-dom/client";
import { useMediaQuery } from "react-responsive";
import { Mobile } from "./mobile/mobile";
import { Desktop } from "./desktop/desktop";

export const RoomBook = () => {
  const isMobile = useMediaQuery({ maxWidth: 765 });
  return isMobile ? <Mobile /> : <Desktop />;
};
