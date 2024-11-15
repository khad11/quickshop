import { addProduct } from "./productslocal.js";

const homeCartTemplate = document.getElementById("home-cart-template");
const productsContainer = document.getElementById("products-container");
const trTemplate = document.getElementById("tr-template");

let allProducts;

/// stop navigation
const stopNavigation = (e) => {
  e.preventDefault();
  const id = e.target.dataset.id;

  const item = allProducts.find((product) => product.id == id);
  addProduct({ ...item, amount: 1 });
};

export const updateHomeUI = ({ products }) => {
  allProducts = products;
  allProducts.forEach((product) => {
    const { thumbnail, title, brand, price, rating, id } = product;
    const clone = homeCartTemplate.content.cloneNode(true);
    const img = clone.querySelector("img");
    const brandEl = clone.querySelector("#brend");
    const titleEl = clone.querySelector("#title");
    const priceEl = clone.querySelector("#price");
    const ratingEl = clone.querySelector("#rating");
    const a = clone.querySelector("a");
    const button = clone.querySelector("button");

    a.href = `./product.html?id=${id}`;
    img.src = thumbnail;
    titleEl.textContent = title;
    brandEl.textContent = brand;
    priceEl.textContent = `$ ${price} only:)`;
    ratingEl.textContent = rating;
    productsContainer.appendChild(clone);
    button.setAttribute("data-id", id);
    button.addEventListener("click", stopNavigation);
  });
};

export const updateTbodyUI = (products) => {
  products.forEach((product) => {
    const { id, thumbnail, amount, price, title, brand } = product;
    const clone = trTemplate.content.cloneNode(true);
    const image = clone.querySelector("img");
    console.log(title);
    img.src = thumbnail;
  });
};
