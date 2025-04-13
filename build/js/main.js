const initApp = () => {
  const hamBurger = document.getElementById("hamburger-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const toggleMenu = () => {
    mobileMenu.classList.toggle("hidden");
    mobileMenu.classList.toggle("flex");
  };

  hamBurger.addEventListener("click", toggleMenu);
  mobileMenu.addEventListener("click", toggleMenu);
};

document.addEventListener("DOMContentLoaded", initApp);
