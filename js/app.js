import "./mode.js";
import request from "./request.js";
import { updateHomeUI } from "./updateUi.js";
// import "./cart.js";

request("https://dummyjson.com/products")
  .then((data) => updateHomeUI(data))
  .catch((error) => console.log(error));
