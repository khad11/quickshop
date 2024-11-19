export let localProducts = JSON.parse(localStorage.getItem("product")) || [];

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
};
//increment
export const incrementItem = (e) => {
  // const id = e.target.dataset.id;
  // localProducts = localProducts.map((product) => {
  //   if ((product.id = id)) {
  //     return {
  //       ...product,
  //       amount: product.amount + 1,
  //     };
  //   } else {
  //     return product;
  //   }
  // });
  // localStorage.setItem("product", JSON.stringify(localProducts));
  // updateTbodyUI(localProducts);
};
