// SHOW MENU
const showMenu = (toogleId, navId) => {
  const toogle = document.getElementById(toogleId),
    nav = document.getElementById(navId);

  if (toogle && nav) {
    toogle.addEventListener("click", () => {
      nav.classList.toggle("show-menu");
    });
  }
};
showMenu("nav-toggle", "nav-menu");

// Remove Menu Mobile
const navLink = document.querySelectorAll(".nav__link");
const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
};
navLink.forEach((link) => link.addEventListener("click", linkAction));

// SCROLL SELECTION ACTIVE LINK
const sections = document.querySelectorAll("section[id]");
const scrollActive = () => {
  const scrollY = window.pageYOffset;
  sections.forEach((current) => {
    const secctionHeight = current.offsetHeight;
    const secctionTop = current.offsetTop - 50;
    let secctionId = current.getAttribute("id");
    if (scrollY > secctionTop && scrollY <= secctionTop + secctionHeight) {
      document
        .querySelector(`.nav__menu a[href*=${secctionId}]`)
        .classList.add("active-link");
    } else {
      document
        .querySelector(`.nav__menu a[href*=${secctionId}]`)
        .classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

// Chage background header INDICA LA SECCION QUE ESTAMOS
const scrollHeader = () => {
  const header = document.getElementById("header");
  // console.log(`scrollY ${scrollY}`);
  scrollY >= 200
    ? header.classList.add("scroll-header")
    : header.classList.remove("scroll-header");
};
window.addEventListener("scroll", scrollHeader);

// Show scroll top
const scrollTop = () => {
  const scrolltop = document.getElementById("scroll-top");
  scrollY >= 560
    ? scrolltop.classList.add("show-scroll")
    : scrolltop.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollTop);

// MIXITUP FILTER PORTFOLIO
const mixer = mixitup(".portfolio__container", {
  selectors: {
    target: ".portfolio__content",
  },
  animation: {
    duration: 500,
  },
});

// Link Active portafolio
const linkPortfolio = document.querySelectorAll(".portfolio__item");
function activePortfolio() {
  if (linkPortfolio) {
    linkPortfolio.forEach((link) => link.classList.remove("active-portfolio"));
    this.classList.add("active-portfolio");
  }
};
linkPortfolio.forEach((l) => l.addEventListener("click", activePortfolio));
