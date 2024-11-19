import { toast } from "./toast.js";
// import("./updateUi.js");
import("./mode.js");
import { updateTbodyUI } from "./updateUi.js";

let localProducts = JSON.parse(localStorage.getItem("product"));

if (!localProducts) {
  toast("warning", "Oops! you don't have any product yet ");
} else {
  updateTbodyUI(localProducts);
}
