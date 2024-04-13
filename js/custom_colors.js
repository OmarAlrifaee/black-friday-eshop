// selecte elements
const customMenu = document.querySelector(".custom-colors");
const openCustomBtn = document.querySelector(".out-div");
// colors btns
const colorBtns = Array.from(
  document.querySelectorAll(".custom-colors button")
);
// get the text h3 and h4
const h3Text = Array.from(document.getElementsByTagName("h3"));
const h4Text = Array.from(document.getElementsByTagName("h4"));
// get all of the span's in the h3 to make them white
const spans = Array.from(document.querySelectorAll("h3 span"));
// hundle open and close custom menu
openCustomBtn.addEventListener("click", () => {
  openCustomBtn.classList.toggle("out-div-after-click");
  customMenu.classList.toggle("custom-after-click");
});
// hundle colors btns click events
colorBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // remove active color class from all btns
    removeActive();
    // make all of the spans in the h3 white
    spanWhite();
    if (btn.dataset.color === "orange") {
      btn.classList.add("active-color");
      // hundle adding color on the h4 elements
      removeColorClass();
      h4Text.forEach((h4) => {
        h4.classList.add("f-d-color");
      });
      h3Text.forEach((h3) => {
        h3.classList.add("f-n-color");
      });
    } else if (btn.dataset.color === "green") {
      btn.classList.add("active-color");
      // hundle adding color on the h4 elements
      removeColorClass();
      h4Text.forEach((h4) => {
        h4.classList.add("s-d-color");
      });
      h3Text.forEach((h3) => {
        h3.classList.add("s-n-color");
      });
    } else if (btn.dataset.color === "blue") {
      btn.classList.add("active-color");
      // hundle adding color on the h4 elements
      removeColorClass();
      h4Text.forEach((h4) => {
        h4.classList.add("th-d-color");
      });
      h3Text.forEach((h3) => {
        h3.classList.add("th-n-color");
      });
    }
  });
});

// remove active class's from all buttons
function removeActive() {
  colorBtns.forEach((btn) => {
    btn.classList.remove("active-color");
  });
}

// set the set defaul color btn
function setDefualt() {
  // remove color class's from all buttons
  removeColorClass();
  spans.forEach((span) => {
    span.classList.remove("text-white");
  });
  // remove active class from all buttons when click on the defualt color
  removeActive();
}

// remove all colors class's from the h3 and the h4 text
function removeColorClass() {
  h3Text.forEach((h3) => {
    h3.classList.remove("f-n-color");
    h3.classList.remove("s-n-color");
    h3.classList.remove("th-n-color");
  });
  h4Text.forEach((h4) => {
    h4.classList.remove("f-d-color");
    h4.classList.remove("s-d-color");
    h4.classList.remove("th-d-color");
  });
}
// make all of the spans white
function spanWhite() {
  spans.forEach((span) => {
    span.classList.add("text-white");
  });
}