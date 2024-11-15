import("./mode.js");
import request from "./request.js";

const titleEl = document.getElementById("title");
const categoryEl = document.getElementById("category");
const priceEl = document.getElementById("price");
const descriptionEl = document.getElementById("description");
const discountPercentageEl = document.getElementById("discountPercentage");
const thumbnailEl = document.getElementById("thumbnail");
const carousel = document.getElementById("carousel");
const carouselItemTemp = document.getElementById("carousel-item");

const location = window.location.search;
const params = new URLSearchParams(location).get("id");

if (params) {
  request(`https://dummyjson.com/products/${params}`).then((product) => {
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
  });
}
