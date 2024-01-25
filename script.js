let strips = document.querySelectorAll(".strip"); // Selecting both strips individually
let watchImg = document.querySelector(".watch-img");
let mainRightPara = document.querySelectorAll(".main-right p");
let mainRightHeading = document.querySelector(".main-right h1");
let mainRightButton = document.querySelector(".main-right button");
let preloader = document.querySelector(".preloader");
let preloaderText = document.querySelectorAll(".preloader h1"); // Selecting each char individually from the h1 elem
let hamburger = document.querySelector(".hamburger");
let navItems = document.querySelectorAll(".nav-items li a");

document.addEventListener("DOMContentLoaded", function () {
  let tl = gsap.timeline();

  tl.from(preloaderText, {
    opacity: 0,
    y: "100vh",
    duration: 0.5,
    stagger: 0.2,
  });

  tl.to(preloader, {
    x: "-100vw",
    duration: 0.4,
    display: "none",
  });

  tl.from(strips, {
    y: "-100vh",
    duration: 1,
    stagger: 0.5,
  });

  tl.from(watchImg, {
    opacity: 0,
    scale: 0.8,
    y: "-100vh",
  });

  tl.from(mainRightHeading, {
    x: -100,
    opacity: 0,
    duration: 1,
    offset: "0.1",
  });

  tl.from(mainRightPara, {
    x: 100,
    opacity: 0,
    duration: 1,
    offset: "0.2",
    stagger: 0.4,
  });

  tl.from(mainRightButton, {
    y: 100,
    opacity: 0,
    duration: 1,
    offset: "-=0.1",
  });

  tl.to(watchImg, {
    y: 30,
    duration: 0.9,
    repeat: -1,
    yoyo: true,
  });
});

hamburger.addEventListener("click", () => {
  navItems.forEach((navItem) => {
    navItem.style.display =
      navItem.style.display === "block" ? "none" : "block";
  });
});
