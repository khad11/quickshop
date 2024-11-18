import("./mode.js");
import request from "./request.js";
import { updateProductUI } from "./updateUi.js";

const location = window.location.search;
const params = new URLSearchParams(location).get("id");
// console.log(params);

if (params) {
  request(`https://dummyjson.com/products/${params}`)
    .then((product) => updateProductUI(product))
    .catch((error) => console.log(error.massage));
}
