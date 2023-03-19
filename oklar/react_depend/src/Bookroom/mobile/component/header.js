import React from "react";

export const MobileHeader = ({ showMenu }) => {
  return (
    <main className="mobilebook_header">
      <img src="./img/oklarpng4.png" className="mobilebook_brand"></img>
      <div className="mobilebook_toggler" onClick={showMenu}></div>
    </main>
  );
};
