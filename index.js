const closeIconElement = document.querySelector(".close-btn");
const burgerIconElement = document.querySelector(".menu-icon");

const menuElement = document.querySelector(".nav-ul");

closeIconElement.addEventListener("click", () => {
  menuElement.classList.add("hide-menu");
  menuElement.classList.remove("show-menu");

});

burgerIconElement.addEventListener("click", () => {
  menuElement.classList.add("show-menu");
  menuElement.classList.remove("hide-menu");
});
