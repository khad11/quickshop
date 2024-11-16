import { toast } from "./toast.js";
// import("./updateUi.js");

import("./mode.js");

let localProducts = JSON.parse(localStorage.getItem("products"));
import { updateTbodyUI } from "./updateUi.js";
console.log(localProducts);

if (!localProducts) {
  toast("warning", "Oops! you don't have any product yet ");
} else {
  updateTbodyUI(localProducts);
}

localStorage.setItem("products", JSON.stringify(localProducts));

// console.log(localStorage.getItem("products"));
