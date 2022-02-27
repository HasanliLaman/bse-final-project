const overlay = document.querySelector(".overlay");
const navbar = document.querySelector(".nav__collapse");
const hamburger = document.querySelector(".hamburger");
const btnClose = document.querySelector(".nav__close");

hamburger?.addEventListener("click", function () {
  overlay.classList.remove("hidden");
  navbar.classList.add("nav--active");
});

btnClose?.addEventListener("click", function () {
  overlay.classList.add("hidden");
  navbar.classList.remove("nav--active");
});
