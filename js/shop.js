// selecte elements
const allProducts = Array.from(document.querySelectorAll(".product"));
const searchInput = document.querySelector(".search input");
const currentProductsCount = document.getElementById("current-product-count");
const allProductsCount = document.getElementById("all-product-count");
const sortBtns = Array.from(document.querySelectorAll(".sort-btns button"));
// products section
const productsSection = document.querySelector(".shop-content");
// get products from data num
const firstPageProducts = Array.from(
  document.querySelectorAll(`.product[data-num=first]`)
);
const secondPageProducts = Array.from(
  document.querySelectorAll(`.product[data-num=second]`)
);

// hundle sorting products to two sections
sortBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // hundle active class
    sortBtns.forEach((btn) => btn.classList.remove("bg-danger"));
    btn.classList.add("bg-danger");
    // hundle shoing products
    showProducts(btn);
    // scroll to top of the products section
    scrollSection(productsSection.offsetTop);
  });
});
// hundle search featuer
searchInput.addEventListener("input", search);
// set the all product count value
allProductsCount.innerHTML = allProducts.length;
// set the default current products count value
currentProductsCount.innerHTML = firstPageProducts.length;

function search() {
  sortBtns.forEach((btn) => {
    if (btn.classList.contains("bg-danger")) {
      // make an array of the products depend on btn data num
      let currentProducts = Array.from(
        document.querySelectorAll(`.product[data-num=${btn.dataset.num}]`)
      );
      // loop on current products and see if there title includs the search input value
      currentProducts.forEach((p) => {
        p.parentElement.classList.add("d-none");
        let productTitle = p.dataset.title.toLowerCase();
        if (productTitle.includes(searchInput.value)) {
          p.parentElement.classList.remove("d-none");
        }
      });
    }
  });
}

function showProducts(btn) {
  allProducts.forEach((product) => {
    product.parentElement.classList.add("d-none");
    if (btn.dataset.num === "first") {
      firstPageProducts.forEach((product) =>
        product.parentElement.classList.remove("d-none")
      );
      // set the current products count value
      currentProductsCount.innerHTML = firstPageProducts.length;
    } else {
      secondPageProducts.forEach((product) =>
        product.parentElement.classList.remove("d-none")
      );
      // set the current products count value
      currentProductsCount.innerHTML = secondPageProducts.length;
    }
  });
}
// scroll to section
function scrollSection(section) {
  window.scrollTo({
    top: section,
  });
}
