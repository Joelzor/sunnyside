const menuBtn = document.querySelector(".navbar__menu-icon");
const mobileMenu = document.querySelector(".header__mobile-nav");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("header__mobile-nav-visible");
});
