export let localProducts = JSON.parse(localStorage.getItem("product")) || [];

// bascket info
const basket = document.getElementById("bascet");
const priceTotal = document.querySelector(".priceTotal");

const calculateTotal = () => {
  let totalAmount = 0;
  let totalPrice = 0;
  let localProducts = JSON.parse(localStorage.getItem("product")) || [];
  localProducts.forEach((product) => {
    totalAmount += Number(product.amount);
    totalPrice += Number(product.amount * product.price);
  });
  basket.textContent = totalAmount;
  if (priceTotal) {
    priceTotal.textContent = ` $ ${totalPrice.toFixed(2)}`;
  }
};
if (localProducts.length) {
  calculateTotal();
}
import { formatNumber } from "./formatNumber.js";
//toast
import { toast } from "./toast.js";
import { updateTbodyUI } from "./updateUi.js";
//add products
export const addProduct = (product) => {
  localProducts = JSON.parse(localStorage.getItem("product")) || [];

  const item = localProducts.find((prod) => prod.id == product.id);

  if (!item) {
    localStorage.setItem(
      "product",
      JSON.stringify([...localProducts, product])
    );
    calculateTotal();
    toast("succes", "You added!");
  } else {
    toast("warning", "You already added!");
  }
  // console.log(item);
};
// remove products
export const deleteElement = (e) => {
  const id = e.target.dataset.id;
  localProducts = localProducts.filter((product) => product.id != id);

  localStorage.setItem("product", JSON.stringify(localProducts));
  updateTbodyUI(localProducts);
  calculateTotal();
};

// UPDATE amount
export const updateAmount = (e, currentAmount) => {
  let localProducts = JSON.parse(localStorage.getItem("product")) || [];

  if (currentAmount == 0) {
    deleteElement(e);
    return;
  }

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
  calculateTotal();
};

// add name
