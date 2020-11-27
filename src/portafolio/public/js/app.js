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

// Swiper corousel
// direction: "vertical",
const mySwiper = new Swiper(".testimonial__container", {
  spaceBetween: 16,
  loop: true,
  grabCoursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

// GSAP ANIMATION
gsap.from(
  '.home__img',
  {
    opacity: 0,
    duration: 2,
    dalay: .5, 
    x:60,
  }
);
gsap.from(
  '.home__data',
  {
    opacity: 0,
    duration: 2,
    dalay: .8, 
    y:25
  }
);
gsap.from(`.home__button, .home__greeting, .homee__profession, .home__name`, {
  opacity: 0,
  duration: 2,
  dalay: 1,
  y: 25,
  ease: 'expo.out',
  stagger:.2,
});
gsap.from(`.nav__logo, .nav__toggle`,
{
  opacity: 0,
  duration: 2,
  dalay: 1.5,
  y: 25,
  ease: 'expo.out',
  stagger:.2,
});
gsap.from(`.nav__item`,
{
  opacity: 0,
  duration: 2,
  dalay: 1.8,
  y: 25,
  ease: 'expo.out',
  stagger:.2,
});
gsap.from(`.home__social-icon`,
{
  opacity: 0,
  duration: 2,
  dalay: 2.3,
  y: 25,
  ease: 'expo.out',
  stagger:.2,
});
