const goUpButton = document.querySelector(".go-up");
// show the button when the scroll value bigger than 400
window.addEventListener("scroll", () => {
  if (window.scrollY >= 400) {
    goUpButton.classList.remove("d-none");
  } else {
    goUpButton.classList.add("d-none");
  }
});
// hundle go up button click event
goUpButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
