// select elements
const addProduct = Array.from(
  document.querySelectorAll(".product .add-to-cart-icon")
);
const productsList = document.querySelector(".menu ul");
const cart = document.querySelector(".menu");
// this div is the no products added div
const emptyProducts = document.querySelector(".empty");
// bagItemsCount
const itemsCount = document.getElementById("bag-items-count");
// total items div
const totalItemsDiv = document.querySelector(".items-count");
const totalItemsSpan = document.querySelector(".items-count .all-items");
const totalPriceSpan = document.querySelector(".items-count .total-price");

// loop throwh All Add to cart icons
addProduct.forEach((add) => {
  // selecte product data
  let image = add.parentElement.parentElement.parentElement.dataset.img;
  let title = add.parentElement.parentElement.parentElement.dataset.title;
  let price = add.parentElement.parentElement.parentElement.dataset.price;
  add.addEventListener("click", () => {
    // create elements
    createElements(image, title, price);
    // plus the bagItemsCount
    itemsCount.innerHTML++;
    // remove the no products added div
    noProduct();
    // hundle add to cart icon after add product to the cart
    add.innerHTML = "";
    // create check icon
    let checkIcon = document.createElement("i");
    checkIcon.classList.add("fa-solid", "fa-check");
    add.append(checkIcon);
    add.style.pointerEvents = "none";
    // check list total items
    hundleTotal();
  });
});

// hundle remove product button
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("remove-product")) {
    let product = e.target.parentElement.parentElement;
    product.remove();
    // min the bagItemsCount
    itemsCount.innerHTML = +itemsCount.innerHTML - 1;
    // reshow the no product div
    noProduct();
    // check list total items
    hundleTotal();
  }
});
// hundle plus products count
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("p")) {
    let productCount = e.target.parentElement.children[1];
    let productPrice =
      e.target.parentElement.parentElement.parentElement.parentElement.dataset
        .price;
    let priceDiv =
      e.target.parentElement.parentElement.parentElement.parentElement
        .children[1].children[1];
    productCount.innerHTML++;
    priceDiv.innerHTML = `$<span>${
      +productPrice * +productCount.innerHTML
    }</span>`;
    // check list total items
    hundleTotal();
  }
});
// hundle min products count
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("m")) {
    let productCount = e.target.parentElement.children[1];
    let productPrice =
      e.target.parentElement.parentElement.parentElement.parentElement.dataset
        .price;
    let priceDiv =
      e.target.parentElement.parentElement.parentElement.parentElement
        .children[1].children[1];
    if (productCount.innerHTML !== "0") {
      productCount.innerHTML--;
    }
    priceDiv.innerHTML = `$<span>${
      +productPrice * +productCount.innerHTML
    }</span>`;
    // check list total items
    hundleTotal();
  }
});
// create elements function
function createElements(img, title, price) {
  // create li and add class to it
  let li = document.createElement("li");
  li.classList.add(
    "d-flex",
    "justify-content-between",
    "align-items-center",
    "border-bottom",
    "pb-3",
    "mt-3"
  );
  // add data set to li
  li.dataset.img = img;
  li.dataset.title = title;
  li.dataset.price = price;
  // start first div
  // create first div and add class to it
  let firstDiv = document.createElement("div");
  firstDiv.classList.add("d-flex", "align-items-center");
  // create img
  let image = document.createElement("img");
  image.src = img;
  // start title div
  // create title div
  let titleDiv = document.createElement("div");
  titleDiv.classList.add("ms-3");
  // create h4
  let titleText = document.createElement("h4");
  titleText.innerHTML = title;
  // create div
  let buttonsDiv = document.createElement("div");
  buttonsDiv.classList.add("d-flex", "border", "buttons-container");
  // create buttons
  let mButton = document.createElement("div");
  mButton.className = "m";
  mButton.innerHTML = "-";
  let productsCountDiv = document.createElement("div");
  productsCountDiv.classList.add("products-count", "text-black", "text-center");
  productsCountDiv.innerHTML = 1;
  let pButton = document.createElement("div");
  pButton.className = "p";
  pButton.innerHTML = "+";
  // append buttons to buttons div
  buttonsDiv.append(mButton);
  buttonsDiv.append(productsCountDiv);
  buttonsDiv.append(pButton);
  // append to title div
  titleDiv.append(titleText);
  titleDiv.append(buttonsDiv);
  // End title div
  // append elements to first div
  firstDiv.append(image);
  firstDiv.append(titleDiv);
  // End first div
  // start second div
  // create second div and add class to it
  let secondDiv = document.createElement("div");
  secondDiv.classList.add(
    "d-flex",
    "flex-column",
    "align-items-end",
    "gap-3",
    "text-white"
  );
  // create remove product icon
  let removeProduct = document.createElement("i");
  removeProduct.classList.add(
    "fa-regular",
    "fa-circle-xmark",
    "remove-product"
  );
  // create price div
  let priceDiv = document.createElement("div");
  priceDiv.classList.add("price");
  priceDiv.innerHTML = `$<span>${price}</span>`;
  // append elements to second div
  secondDiv.append(removeProduct);
  secondDiv.append(priceDiv);
  // End second div
  // append elements to li
  li.append(firstDiv);
  li.append(secondDiv);
  // append li to the list
  productsList.append(li);
}

// hundle no products display div function
function noProduct() {
  if (productsList.innerHTML !== "") {
    emptyProducts.classList.add("d-none");
    totalItemsDiv.classList.remove("d-none");
  } else {
    emptyProducts.classList.remove("d-none");
    totalItemsDiv.classList.add("d-none");
  }
}

// hundle total items count
function hundleTotal() {
  totalItemsSpan.innerHTML = productsList.children.length;
  // loop throgh all elements and get the total price of them
  let TotalPrice = 0;
  let products = Array.from(productsList.children);
  products.forEach((product) => {
    TotalPrice =
      TotalPrice + +product.children[1].children[1].children[0].innerHTML;
  });
  totalPriceSpan.innerHTML = `$<span>${TotalPrice}</span>`;
  localStorage.setItem("total", JSON.stringify(TotalPrice));
}
