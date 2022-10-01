import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);

const menuButton = document.querySelector(".menu-button");
const menuButtonContainer = document.querySelector<HTMLDivElement>(
  ".menu-button-container"
);
const menuButtonIcon = document.querySelector(".menu-button>i");
const contactButton = document.querySelector(".header-button:nth-child(2)");

menuButton.addEventListener("click", (e) => {
  e.preventDefault();
  menuButtonContainer.classList.toggle("active");
  menuButtonIcon.classList.toggle("fa-bars");
  menuButtonIcon.classList.toggle("fa-x");
});

contactButton.addEventListener("click", (e) => {
  e.preventDefault();
  gsap.to(window, { duration: 0.3, scrollTo: ".bottom" });
});
