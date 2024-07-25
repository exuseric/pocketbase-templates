const getYPosition = () => window.scrollY || document.documentElement.scrollTop;
const matchMedia = () => window.matchMedia("(min-width:640px)").matches;
// Toggle the menu when the button is clicked
function toggleMenu() {
  const showBtn = document.querySelector("#menuToggle");
  if (showBtn) {
    showBtn.addEventListener("click", () => {
      const nav = document.querySelector("#navbar__links");
      const navBar = document.querySelector(".navbar");

      if (nav) {
        const icons = document.querySelectorAll(".menuBtnToggleIcon");
        icons.forEach((icon) => {
          icon.classList.toggle("nav--closed");
        });
        nav.classList.toggle("nav--open");
      }

      if (navBar) {
        const isActive = navBar.attributes.getNamedItem("navbar-active").value;
        isActive === "false" && navBar.setAttribute("navbar-active", "true");
        isActive === "true" &&
          getYPosition() <= 0 &&
          navBar.setAttribute("navbar-active", "false");
      }
    });
  }
}

function navChangeColor() {
  const navBar = document.querySelector(".navbar");
  const nav = document.querySelector("#navbar__links");
  const ctaLink = document.querySelector(".cta-link");
  const logo = document.querySelector(".logo");
  document.addEventListener("scroll", () => {
    if (getYPosition() > navBar.getBoundingClientRect().height) {
      navBar.setAttribute("navbar-active", "true");
      // matchMedia() && nav.classList.remove("sm:text-white");
      // ctaLink.classList.remove("bg-white", "text-primary-darker");
      // ctaLink.classList.add("bg-primary-dark", "text-white");

      logo.classList.add("size-32");
      logo.classList.remove("size-44");
    } else {
      matchMedia() && navBar.setAttribute("navbar-active", "false");
      // matchMedia() && nav.classList.add("sm:text-white");
      // ctaLink.classList.add("bg-white", "text-primary-darker");
      // ctaLink.classList.remove("bg-primary-dark", "text-white");

      logo.classList.remove("size-32");
      logo.classList.add("size-44");
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  toggleMenu();
  navChangeColor();
});

export { toggleMenu, navChangeColor };
