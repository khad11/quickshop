import { addProduct } from "./productslocal.js";
import { deleteElement } from "./productslocal.js";
import { localProducts } from "./productslocal.js";

const homeCartTemplate = document.getElementById("home-cart-template");
const productsContainer = document.getElementById("products-container");
const trTemplate = document.getElementById("tr-template");
const tBody = document.querySelector("tbody");

let allProducts;

/// stop navigation
const stopNavigation = (e) => {
  e.preventDefault();
  const id = e.target.dataset.id;

  const item = allProducts.find((product) => product.id == id);
  addProduct({ ...item, amount: 1 });
};

export const updateHomeUI = ({ products }) => {
  // console.log(products);
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

const titleEl = document.getElementById("title");
const categoryEl = document.getElementById("category");
const priceEl = document.getElementById("price");
const descriptionEl = document.getElementById("description");
const discountPercentageEl = document.getElementById("discountPercentage");
const thumbnailEl = document.getElementById("thumbnail");
const carousel = document.getElementById("carousel");
const carouselItemTemp = document.getElementById("carousel-item");

export const updateProductUI = (product) => {
  const {
    title,
    thumbnail,
    images,
    category,
    price,
    discountPercentage,
    description,
  } = product;
  titleEl.textContent = title;
  descriptionEl.textContent = description;
  priceEl.textContent = price;
  discountPercentageEl.textContent = discountPercentage;
  priceEl.textContent = price;
  categoryEl.textContent = category;

  if (images.length > 1) {
    images.forEach((imgSrc) => {
      const clone = carouselItemTemp.content.cloneNode(true);
      const image = clone.querySelector("img");
      image.src = imgSrc;
      carousel.appendChild(clone);
    });
  } else {
    thumbnailEl.src = thumbnail;
  }
};
import { formatNumber } from "./formatNumber.js";
export const updateTbodyUI = (products) => {
  tBody.innerHTML = "";
  products.forEach((product) => {
    const { id, thumbnail, amount, price, title, brand } = product;
    const clone = trTemplate.content.cloneNode(true);
    const image = clone.querySelector("img");
    const brendEl = clone.querySelector(".brend");
    const titlEl = clone.querySelector(".title");
    const priceEl = clone.querySelector(".price");
    const amountEl = clone.querySelector(".amount");
    const deleteBtn = clone.querySelector(".delete-btn");
    const incrementItemEl = clone.querySelector(".incrementItem");
    const decrementItemEl = clone.querySelector(".decrementItem");

    image.src = thumbnail;
    brendEl.textContent = `Brand : ${brand}`;
    titlEl.textContent = title;
    priceEl.textContent = formatNumber(price);
    amountEl.textContent = amount;
    deleteBtn.setAttribute("data-id", id);
    incrementItemEl.setAttribute("data-id", id);
    decrementItemEl.setAttribute("data-id", id);
    deleteBtn.addEventListener("click", (e) => {
      deleteElement(e);
    });

    let currentAmount = product.amount;

    incrementItemEl.addEventListener("click", (e) => {
      currentAmount++;
      amountEl.textContent = currentAmount;
      const id = e.target.dataset.id;
      let updateAmountItem = localProducts.map((product) => {
        if (product.id == id) {
          return {
            ...product,
            amount: currentAmount,
          };
        } else {
          return product;
        }
      });
      localStorage.setItem("product", JSON.stringify(updateAmountItem));
    });

    //decrement
    decrementItemEl.addEventListener("click", (e) => {
      currentAmount--;
      amountEl.textContent = currentAmount;
      const id = e.target.dataset.id;
      let updateAmountItem = localProducts.map((product) => {
        if (product.id == id) {
          return {
            ...product,
            amount: currentAmount,
          };
        } else {
          return product;
        }
      });
      localStorage.setItem("product", JSON.stringify(updateAmountItem));
    });

    //append chiild
    tBody.appendChild(clone);
  });
};
