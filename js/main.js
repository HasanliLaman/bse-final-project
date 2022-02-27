// Navbar open/close
const toggleNavbar = function () {
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
};

// Currency dropdown open/close and change
const currencyHandler = function () {
  const dropdownCur = document.querySelector(".nav__currency");
  const dropdownList = document.querySelector(".currency__list");
  const [_, dropdownChosen] = document.querySelectorAll(".dropdown__chosen");

  dropdownCur?.addEventListener("click", function () {
    dropdownList.classList.toggle("dropdown--open");
  });

  dropdownList?.addEventListener("click", function (e) {
    const target = e.target.closest("li");
    dropdownChosen.textContent = target.textContent;
  });
};

//Language dropdown
const languageHandler = function () {
  const dropdownLang = document.querySelector(".nav__language");
  const dropdownList = document.querySelector(".language__list");
  const [dropdownChosen] = document.querySelectorAll(".dropdown__chosen");
  const listOptions = document.querySelectorAll(".language__list li");

  dropdownLang?.addEventListener("mouseenter", function () {
    dropdownList.classList.add("dropdown--open");
  });

  dropdownLang?.addEventListener("mouseleave", function () {
    dropdownList.classList.remove("dropdown--open");
  });

  dropdownList?.addEventListener("click", function (e) {
    listOptions.forEach((el) => el.classList.remove("dropdown--active"));

    const target = e.target.closest("li");
    target.classList.add("dropdown--active");
    dropdownChosen.textContent = target.textContent;
  });
};

const init = function () {
  toggleNavbar();
  currencyHandler();
  languageHandler();
};

init();
