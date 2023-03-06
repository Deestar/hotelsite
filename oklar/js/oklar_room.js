//Desktop javascript
window.onload = () => {
  document.querySelector(".pree").remove();
};
class roomDisplay {
  type;
  constructor(type) {
    this.type = type;
  }
  #btns = [];
  filterButton = () => {
    let btnArray = document.querySelectorAll(".hotel_type_desktop");
    btnArray.forEach((e) => {
      this.#btns.push(e);
    });
    let setFiltered = this.#btns.filter((element) => {
      return element.textContent != this.type;
    });
    setFiltered.forEach((element) => {
      element.style.backgroundColor = "rgba(194, 217, 231, 0.673)";
    });
  };
  setImage = (imgst, imgnd, imgrd) => {
    let imgCont = document.querySelector(".right_img_cont");
    let images = imgCont.children;
    images[0].style.backgroundImage = imgst;
    images[1].style.backgroundImage = imgnd;
    images[2].style.backgroundImage = imgrd;
  };
  setDescription = () => {
    if (this.type == "ROYAL") {
      document.querySelector(".right_descr b").innerHTML =
        "A particular description for royal rooms";
      //price of royal room
      document.querySelector(".right_descr h2").innerHTML =
        "12,000<span>/night</span>";
    } else if (this.type == "EXIQUITE") {
      document.querySelector(".right_descr b").innerHTML =
        "A particular description for exiquite rooms";
      //price of exiquite room
      document.querySelector(".right_descr h2").innerHTML =
        "10,000<span>/night</span>";
    } else if (this.type == "STANDARD") {
      document.querySelector(".right_descr b").innerHTML =
        "A particular description for standard rooms";
      //price of standard room
      document.querySelector(".right_descr h2").innerHTML =
        "8,000<span>/night</span>";
    } else if (this.type == "REGULAR") {
      document.querySelector(".right_descr b").innerHTML =
        "A particular description for regular rooms";
      //price of regular room
      document.querySelector(".right_descr h2").innerHTML =
        "7,000<span>/night</span>";
    }
  };
  setRoom = () => {
    if (this.type == "ROYAL") {
      //this will contain the ROYAL images
      this.setImage(
        "url(../oklar/oklar_img/img5.webp)",
        "url(../oklar/oklar_img/img2.jpg)",
        "url(../oklar/oklar_img/img3.jpg)"
      );
      //this is a function that sets description and price based on the room type passed
      this.setDescription();
    } else if (this.type == "EXIQUITE") {
      //this will contain the EXIQUITE images
      this.setImage(
        "url(../oklar/oklar_img/img4.jpg)",
        "url(../oklar/oklar_img/img5.jpg)",
        "url(../oklar/oklar_img/img6.jpg)"
      );
      //this is a function that sets description and price based on the room type passed
      this.setDescription();
    } else if (this.type == "STANDARD") {
      //this will contain the STANDARD images
      this.setImage(
        "url(../oklar/oklar_img/img2.jpg)",
        "url(../oklar/oklar_img/img5.webp)",
        "url(../oklar/oklar_img/img6.jpg)"
      );
      //this is a function that sets description and price based on the room type passed
      this.setDescription();
    } else if (this.type == "REGULAR") {
      //this will contain the REGULAR images
      this.setImage(
        "url(../oklar/oklar_img/dish1.jpg)",
        "url(../oklar/oklar_img/img2.jpg)",
        "url(../oklar/oklar_img/img3.jpg)"
      );
      this.setDescription();
    }
  };
  btnDisplay = () => {
    let btns = document.querySelectorAll(".hotel_type_desktop");

    if (this.type == "ROYAL") {
      btns[0].style.backgroundColor = "rgba(39, 141, 204, 0.673)";
    } else if (this.type == "EXIQUITE") {
      btns[1].style.backgroundColor = "rgba(39, 141, 204, 0.673)";
    } else if (this.type == "STANDARD") {
      btns[2].style.backgroundColor = "rgba(39, 141, 204, 0.673)";
    } else if (this.type == "REGULAR") {
      btns[3].style.backgroundColor = "rgba(39, 141, 204, 0.673)";
    }
    //this function sets the removes highlight from other buttons
    this.filterButton();
  };
  setBtnLink = () => {
    let getBtn = document.querySelector(".btn_book");
    if (this.type == "ROYAL") {
      getBtn.addEventListener("click", (e) => {
        let getCookie = document.cookie;
        let checkOut = getCookie.split("=")[2];
        let getIn = getCookie.split("=")[1];
        let checkIn = getIn.split(";")[0];
        getBtn.setAttribute(
          "href",
          `oklar_pay.c.php?price=12000&in=${checkIn}&out=${checkOut}`
        );
      });
    } else if (this.type == "EXIQUITE") {
      getBtn.addEventListener("click", (e) => {
        let getCookie = document.cookie;
        let checkOut = getCookie.split("=")[2];
        let getIn = getCookie.split("=")[1];
        let checkIn = getIn.split(";")[0];
        getBtn.setAttribute(
          "href",
          `oklar_pay.c.php?price=10000&in=${checkIn}&out=${checkOut}`
        );
      });
    } else if (this.type == "STANDARD") {
      getBtn.addEventListener("click", (e) => {
        let getCookie = document.cookie;
        let checkOut = getCookie.split("=")[2];
        let getIn = getCookie.split("=")[1];
        let checkIn = getIn.split(";")[0];
        getBtn.setAttribute(
          "href",
          `oklar_pay.c.php?price=8000 &in=${checkIn}&out=${checkOut}`
        );
      });
    } else if (this.type == "REGULAR") {
      getBtn.addEventListener("click", (e) => {
        // e.preventDefault();
        let getCookie = document.cookie;
        let checkOut = getCookie.split("=")[2];
        let getIn = getCookie.split("=")[1];
        let checkIn = getIn.split(";")[0];
        getBtn.setAttribute(
          "href",
          `oklar_pay.c.php?price=7000&in=${checkIn}&out=${checkOut}`
        );
      });
    }
  };
}
function transmit(type) {
  let main = new roomDisplay(type);
  main.setRoom();
  main.btnDisplay();
  main.setBtnLink();
}
//Mobile javascript
let getImage = (element) => {
  let getImageChild = element.children[0];
  let getImageStyle = window.getComputedStyle(getImageChild);
  let getUrl = getImageStyle.getPropertyValue("background-image");
  let getImg = getUrl.split('"')[1];
  return getImg;
};
let getDescription = (element) => {
  let description = element.children[1].innerHTML;
  return description;
};

let getPrice = (element) => {
  let price = element.children[2].innerHTML;
  return price;
};
let getFooter = () => {
  let getFooter = document.querySelector("footer");
  let footer = getFooter.innerHTML;
  return footer;
};
let setArrow = () => {
  let getReturn = document.querySelector(".bck_arrow");
  getReturn.style.display = "grid";
};
let removeArrow = () => {
  let getReturn = document.querySelector(".bck_arrow");
  getReturn.style.display = "none";
};
let getInit = () => {
  let init = document.querySelector(".main_cont").innerHTML;
  return init;
};
//Previous element create function that appends element inside the main div
// let createElement = (classe) => {
//   let element = document.createElement("div");
//   let getMain = document.querySelector(".main_cont");
//   getMain.appendChild(element);
//   element.classList.toggle(classe);
//   getMain.style.marginLeft = "0px";
//   return element;
// };
let createElement = (classe) => {
  let element = document.createElement("div");
  let getMain = document.querySelector(".check_room");
  getMain.appendChild(element);
  element.classList.toggle(classe);
  getMain.style.marginLeft = "0px";
  return element;
};
let createCirc = () => {
  let createMain = createElement("circ_cont");
  let circ1 = document.createElement("div");
  let circ2 = document.createElement("div");
  let circ3 = document.createElement("div");
  createMain.appendChild(circ1);
  createMain.appendChild(circ2);
  createMain.appendChild(circ3);
  circ1.classList.toggle("circ");
  circ2.classList.toggle("circ");
  circ3.classList.toggle("circ");
};
// let deleteMain = () => {
//   document.querySelector(".main_cont").innerHTML = "";
// };
let changeDiv = () => {
  let getRooms = document.querySelectorAll(".rooms");
  getRooms.forEach((element, index) => {
    element.addEventListener("click", () => {
      let getInitial = getInit();
      let img = getImage(element);
      let descr = getDescription(element);
      let price = getPrice(element);
      let getMain = document.querySelector(".check_room");
      getMain.style.display = "grid";
      let imgDiv = createElement("img_div");
      createCirc();
      let createDescription = createElement("descr_new");
      let createPrice = createElement("price_new");
      imgDiv.style.backgroundImage = `url(${img})`;
      createDescription.innerHTML = descr;
      createPrice.innerHTML = price;
      setArrow();
      bookies();
      manualChange(index);
    });
  });
};
let returnBack = () => {
  let getReturn = document.querySelector(".bck_arrow");
  getReturn.addEventListener("click", () => {
    // history.back();
    let getMain = document.querySelector(".check_room");
    getMain.replaceChildren();
    getReturn.style.display = "none";
    getMain.style.display = "none";
  });
};
//CHANGING THE BACGROUND IMAGE OF PAGE 2
let manualChange = (i) => {
  let img_div = document.querySelector(".img_div");
  let getArray = document.querySelectorAll(".circ");
  getArray[0].onclick = () => {
    if (i <= 1) {
      img_div.style.backgroundImage = "url(../oklar/oklar_img/recep.jpg)";
    } else if (i > 1 && i < 4) {
      console.log("clicked the first circle of exiquite room ");
    } else if (i >= 4 && i < 8) {
      console.log("clicked the first circle of standard room ");
    } else if (i >= 8 && i < 11) {
      console.log("clicked the first circle of regular room ");
    }
  };
  getArray[1].onclick = () => {
    if (i <= 1) {
      img_div.style.backgroundImage = "url(../oklar/oklar_img/bedview.jpg)";
    } else if (i > 1 && i < 4) {
      console.log("clicked the second circle of exiquite room ");
    } else if (i >= 4 && i < 8) {
      console.log("clicked the second circle of standard room ");
    } else if (i >= 8 && i < 11) {
      console.log("clicked the second circle of regular room ");
    }
  };
  getArray[2].onclick = () => {
    if (i <= 1) {
      console.log("clicked the third circle of royal room ");
    } else if (i > 1 && i < 4) {
      console.log("clicked the third circle of exiquite room ");
    } else if (i >= 4 && i < 8) {
      console.log("clicked the third circle of standard room ");
    } else if (i >= 8 && i < 11) {
      console.log("clicked the third circle of regular room ");
    }
  };
};

let bookies = () => {
  let getBookies = document.querySelectorAll(".book");
  getBookies.forEach((element) => {
    element.addEventListener("click", (e) => {
      e.stopPropagation();
    });
  });
};
let Highlight = () => {
  let getButton = document.querySelectorAll(".btn_type");
  getButton.forEach((element, i) => {
    element.addEventListener("click", () => {
      let buttons = document.querySelectorAll(".btn_type");
      let arr = [];
      arr[0] = buttons[0];
      arr[1] = buttons[1];
      arr[2] = buttons[2];
      arr[3] = buttons[3];
      let notCurrent = arr.filter((e, index) => {
        return index !== i;
      });
      notCurrent.forEach((ele) => {
        ele.style.backgroundColor = "rgba(225, 225, 225, 0.937)";
      });
      element.style.backgroundColor = " rgba(0, 57, 150, 0.885)";
    });
  });
};
Highlight();
bookies();
returnBack();
changeDiv();
