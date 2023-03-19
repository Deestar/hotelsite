import React from "react";
import { MobileboxType } from "./boxtype";
import { useRef } from "react";
export const MobileRooms = ({ getshowmore, typenow }) => {
  const refmain = useRef(null);
  return (
    <main ref={refmain} className="mobilebook_roomcont">
      <MobileboxType showmore={getshowmore} typenow={typenow} main={refmain} />
    </main>
  );
};
