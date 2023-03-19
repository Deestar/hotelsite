import React, { useEffect } from "react";
import { MobileBox } from "./box";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";
export const MobileboxType = ({ typenow, main, showmore }) => {
  const royal = useRef(null);
  const exiquite = useRef(null);
  const standard = useRef(null);
  const regular = useRef(null);
  const isSmall = useMediaQuery({ maxWidth: 340 });
  useEffect(() => {
    if (typenow === "ROYAL") {
      main.current.scrollLeft = 20;
    } else if (typenow == "EXIQUITE") {
      main.current.scrollLeft = isSmall ? 390 : 422;
    } else if (typenow == "STANDARD") {
      main.current.scrollLeft = isSmall ? 640 : 824;
    } else if (typenow == "REGULAR") {
      main.current.scrollLeft = 1226;
    }
  }, [typenow]);
  // Function that gets the returns an array of the box elements
  const getDescription = (element) => {
    const parent = element.parentNode.parentNode;
    const children = parent.children;
    const imgSrc = children[0].src;
    const text = children[1].textContent;
    const price = children[2].firstChild.textContent.split("/")[0];
    let propArray = [];
    for (let index = 0; index < 4; index++) {
      if (index === 0) {
        propArray.push(imgSrc);
      } else if (index === 1) {
        propArray.push(text);
      } else if (index === 2) {
        propArray.push(price);
      } else {
        if (price == "₦12,000") {
          propArray.push("ROYAL");
        } else if (price == "₦10,000") {
          propArray.push("EXIQUITE");
        } else if (price == "₦8,000") {
          propArray.push("STANDARD");
        } else {
          propArray.push("REGULAR");
        }
      }
    }
    return propArray;
  };
  // EVENT HANDLER FOR BOX COMPONENT LINK TO and to send info to the mobile show more state
  const viewRoom = (event) => {
    const getArray = getDescription(event.target);
    const [src, text, price, type] = getArray;
    showmore(src, text, price, type);
  };

  return (
    <>
      <section ref={royal} className="mobilebook_typeroom royal">
        <MobileBox
          price="12,000"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."
          img="./img/room1.jpg"
          linkto="view here"
          goto={viewRoom}
        />
        <MobileBox
          price="12,000"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."
          img="./img/room2.jpg"
          linkto="view here"
          goto={viewRoom}
        />
      </section>
      <section ref={exiquite} className="mobilebook_typeroom exiquite">
        <MobileBox
          price="10,000"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."
          img="./img/room3.jpg"
          linkto="view here"
          goto={viewRoom}
        />
        <MobileBox
          price="10,000"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."
          img="./img/room4.jpg"
          linkto="view here"
          goto={viewRoom}
        />
      </section>
      <section ref={standard} className="mobilebook_typeroom standard">
        <MobileBox
          price="8,000"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."
          img="./img/room5.jpg"
          linkto="view here"
          goto={viewRoom}
        />
        <MobileBox
          price="8,000"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."
          img="./img/room6.jpeg"
          linkto="view here"
          goto={viewRoom}
        />
        <MobileBox
          price="8,000"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."
          img="./img/room7.png"
          linkto="view here"
          goto={viewRoom}
        />
        <MobileBox
          price="8,000"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."
          img="./img/room8.jpeg"
          linkto="view here"
          goto={viewRoom}
        />
      </section>
      <section ref={regular} className="mobilebook_typeroom regular">
        <MobileBox
          price="7,000"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."
          img="./img/room9.png"
          linkto="view here"
          goto={viewRoom}
        />
        <MobileBox
          price="7,000"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."
          img="./img/room10.jpeg"
          linkto="view here"
          goto={viewRoom}
        />
        <MobileBox
          price="7,000"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."
          img="./img/room11.png"
          linkto="view here"
          goto={viewRoom}
        />
        <MobileBox
          price="7,000"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."
          img="./img/room12.jpeg"
          linkto="view here"
          goto={viewRoom}
        />
      </section>
    </>
  );
};
