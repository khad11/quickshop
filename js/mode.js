const toggleMode = document.getElementById("toggle-mode");
const theme = localStorage.getItem("theme");

if (theme) {
  document.documentElement.setAttribute("data-theme", theme);
  if (theme == "coffee") {
    toggleMode.checked = false;
  } else {
    toggleMode.checked = true;
  }
}

toggleMode.addEventListener("input", () => {
  if (toggleMode.checked) {
    document.documentElement.setAttribute("data-theme", "coffee");
  } else {
    document.documentElement.setAttribute("data-theme", "nord");
  }

  //local storage da saqlash uchun
  localStorage.setItem(
    "theme",
    document.documentElement.getAttribute("data-theme")
  );
});
