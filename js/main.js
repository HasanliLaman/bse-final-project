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

// Redirects to Orders page when button is clicked
const redirectOrders = function () {
  const btnSubmit = document.querySelector("form button");
  btnSubmit?.addEventListener("click", function (e) {
    e.preventDefault();
    window.location.href = "../orders.html";
  });
};

// Add and remove keywords when input is filled
const keywordHandler = function () {
  const keywordContainer = document.querySelector(".hero__keywords");
  const keywordInput = document.querySelector("#keywords");
  const btnClose = document.querySelectorAll(".hero__keywords svg");

  keywordInput?.addEventListener("keyup", function (e) {
    const letters = /^[A-Za-z]+$/;
    if (e.keyCode == 188 && keywordInput.value.slice(0, -1).match(letters)) {
      e.preventDefault();
      keywordContainer.insertAdjacentHTML(
        "beforeend",
        `
          <span>
          ${keywordInput.value.slice(0, -1)}
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7.41413 6.00001L11.7071 1.70701C12.0981 1.31601 12.0981 0.684006 11.7071 0.293006C11.3161 -0.0979941 10.6841 -0.0979941 10.2931 0.293006L6.00013 4.58601L1.70713 0.293006C1.31613 -0.0979941 0.684128 -0.0979941 0.293128 0.293006C-0.0978721 0.684006 -0.0978721 1.31601 0.293128 1.70701L4.58613 6.00001L0.293128 10.293C-0.0978721 10.684 -0.0978721 11.316 0.293128 11.707C0.488128 11.902 0.744128 12 1.00013 12C1.25613 12 1.51213 11.902 1.70713 11.707L6.00013 7.41401L10.2931 11.707C10.4881 11.902 10.7441 12 11.0001 12C11.2561 12 11.5121 11.902 11.7071 11.707C12.0981 11.316 12.0981 10.684 11.7071 10.293L7.41413 6.00001Z"
              fill="white"
            />
          </svg>
        </span>
      `
      );
      keywordInput.value = "";
    }
  });

  keywordContainer?.addEventListener("click", function (e) {
    const target = e.target.closest(".hero__keywords svg");
    target.parentElement.style.display = "none";
  });
};

//Expand order list items when button is clicked
const expandOrder = function () {
  const btnExpand = document.querySelectorAll(".order__expand");

  btnExpand?.forEach(function (btn) {
    btn.addEventListener("click", function () {
      const orderContent = btn.parentElement.parentElement.nextElementSibling;
      const orderDetails = orderContent.querySelectorAll(".order__details");
      contentHeight = orderDetails.length * orderDetails[0].offsetHeight;

      btn.classList.toggle("order__expand--active");
      if (orderContent.offsetHeight == 0) {
        orderContent.style.height = `${contentHeight}px`;
      } else {
        orderContent.style.height = `0px`;
      }
    });
  });
};

// Add box shadow to focused password field
const passwordFocused = function () {
  const passwordField = document.querySelector(".form__password");
  const password = document.querySelector("#password");

  password?.addEventListener("focus", () =>
    passwordField.classList.add("form--focused")
  );

  password?.addEventListener("blur", () =>
    passwordField.classList.remove("form--focused")
  );
};

// Show/hide password in Log in page form
const passwordVisibilityHandler = function () {
  const password = document.querySelector("#password");
  const iconPassword = document.querySelector(".icon__eye img");

  iconPassword?.addEventListener("click", function () {
    password.type = password.type === "password" ? "text" : "password";
    iconPassword.id = iconPassword.id === "closed" ? "open" : "closed";
    iconPassword.src = `../images/${iconPassword.id}-eye.svg`;
  });
};

// Make Sign in button fixed on scroll
const btnFixed = function () {
  const btn = document.querySelector("#content-form > div:last-of-type");
  const heroContent = document.querySelector(".hero__content");

  let observer = new IntersectionObserver(function (entries) {
    entries.map((entry) => {
      if (entry.isIntersecting) {
        btn.classList.add("btn--fixed");
      } else {
        btn.classList.remove("btn--fixed");
      }
    });
  });

  if (heroContent) {
    observer.observe(heroContent);
  }
};

const init = function () {
  toggleNavbar();
  currencyHandler();
  languageHandler();
  keywordHandler();
  redirectOrders();
  expandOrder();
  passwordFocused();
  passwordVisibilityHandler();
  btnFixed();
};

init();
