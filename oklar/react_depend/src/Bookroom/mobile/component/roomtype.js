import React, { useEffect } from "react";
import { useRef } from "react";
export const MobileType = ({ btntype }) => {
  const bluebck = useRef(null);
  //Event ahndler to change background color
  const setBck = (event) => {
    bluebck.current.classList.remove("mobilebook_addbtnbck");
    bluebck.current = event.target;
    bluebck.current.classList.add("mobilebook_addbtnbck");
    btntype(event.target.textContent);
  };
  //Setting the background of first button to bluishh..
  useEffect(() => {
    bluebck.current.classList.add("mobilebook_addbtnbck");
  });
  return (
    <main className="mobilebook_typecont">
      <section className="mobilebook_title">
        <h3>Category</h3>
      </section>
      <section className="mobilebook_types">
        <button onClick={setBck} ref={bluebck}>
          ROYAL
        </button>
        <button onClick={setBck}>EXIQUITE</button>
        <button onClick={setBck}>STANDARD</button>
        <button onClick={setBck}>REGULAR</button>
      </section>
    </main>
  );
};
