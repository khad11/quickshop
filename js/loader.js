const loaderEL = document.getElementById("loader");

const loader = (state) => {
  if (state) {
    loaderEL.classList.remove("hidden");
  } else {
    loaderEL.classList.add("hidden");
  }
};

export default loader;
