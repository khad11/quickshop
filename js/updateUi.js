const homeCartTemplate = document.getElementById("home-cart-template");
const productsContainer = document.getElementById("products-container");

export const updateHomeUI = ({ products }) => {
  products.forEach((product) => {
    const { thumbnail, title, brand, price, rating } = product;
    const clone = homeCartTemplate.content.cloneNode(true);
    const img = clone.querySelector("img");
    const brandEl = clone.querySelector("#brend");
    const titleEl = clone.querySelector("#title");
    const priceEl = clone.querySelector("#price");
    const ratingEl = clone.querySelector("#rating");
    // const a = clone.querySelector("a");

    // a.href = `./product.html?id=${id}`;
    img.src = thumbnail;
    titleEl.textContent = title;
    brandEl.textContent = brand;
    priceEl.textContent = `$ ${price} only:)`;
    ratingEl.textContent = rating;
    productsContainer.appendChild(clone);
  });
};
