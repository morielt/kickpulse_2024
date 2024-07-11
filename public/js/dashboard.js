const productsTab = document.querySelector(".all-products-tab");
const addProductTab = document.querySelector(".add-product-tab");

const productsContainer = document.querySelector(".products");
const addProductContainer = document.querySelector(".add-product");

productsTab.addEventListener("click", function (e) {
  e.preventDefault();
  productsContainer.classList.remove("hidden");
  addProductContainer.classList.add("hidden");
});

addProductTab.addEventListener("click", function (e) {
  e.preventDefault();
  addProductContainer.classList.remove("hidden");
  productsContainer.classList.add("hidden");
});
