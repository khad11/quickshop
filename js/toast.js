export const toast = (status, massage) => {
  if (status == "warning") {
    Toastify({
      text: massage,
      duration: 3000,
      destination: "https://github.com/apvarun/toastify-js",
      newWindow: true,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "left", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background:
          "linear-gradient(90deg, rgba(48,176,218,1) 0%, rgba(255,0,0,1) 100%)",
      },
      onClick: function () {}, // Callback after click
    }).showToast();
  } else {
    Toastify({
      text: massage,
      duration: 3000,
      destination: "https://github.com/apvarun/toastify-js",
      newWindow: true,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "left", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background:
          "linear-gradient(90deg, rgba(19,166,214,1) 40%, rgba(41,245,11,1) 100%)",
      },
      onClick: function () {}, // Callback after click
    }).showToast();
  }
};
