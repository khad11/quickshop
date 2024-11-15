let localProducts = JSON.parse(localStorage.getItem("product")) || [];

//toast
import { toast } from "./toast.js";

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
};
