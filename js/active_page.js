const pagesButtons = Array.from(
  document.querySelectorAll(".navbar .navbar-nav a")
);
// get the current location path
const activePage = window.location.pathname;

pagesButtons.forEach((button) => {
  // here i check if the link href includes the current page path name and add active class to the current page link
  if (button.href.includes(activePage)) {
    button.classList.add("active");
  }
});
