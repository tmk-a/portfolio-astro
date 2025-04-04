document.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".hamburger-menu");
  const menuItems = document.querySelectorAll(".menu__item");
  const hamburger = document.querySelector(".button__hamburger");
  const closeIcon = document.querySelector(".hamburger-menu__closeIcon");
  const menuIcon = document.querySelector(".hamburger-menu__menuIcon");
  const smallScreen = 640;

  const showMenuHandler = () => {
    menu.classList.add("hamburger-menu__showMenu");
    menuIcon.style.display = "none";
    closeIcon.style.display = "block";
  };

  const closeMenuHandler = () => {
    menu.classList.remove("hamburger-menu__showMenu");
    menuIcon.style.display = "block";
    closeIcon.style.display = "none";
  };

  const toggleMenu = () => {
    if (menu.classList.contains("hamburger-menu__showMenu")) {
      closeMenuHandler();
    } else {
      showMenuHandler();
    }
  };

  const reportWindowSize = () => {
    if (window.innerWidth > smallScreen) {
      closeMenuHandler();
    }
  };

  if (hamburger) {
    hamburger.addEventListener("click", toggleMenu);
  }

  menuItems.forEach(function (menuItem) {
    if (menuItem) {
      menuItem.addEventListener("click", toggleMenu);
    }
  });

  window.addEventListener("resize", reportWindowSize);
});
