"use strict";

let movingBar = document.querySelector("span.bar");
let circles = Array.from(document.querySelectorAll(".circles"));
let prevBtn = document.querySelector(".previous");
let nextBtn = document.querySelector(".next");

let circlesNumber = 0;
let percentage = 0;

// console.log(circlesNumber / (circles.length - 1));

nextBtn.addEventListener("click", () => {
  circlesNumber++;

  circlesNumber =
    circlesNumber > circles.length - 1 ? circles.length - 1 : circlesNumber;

  movingBar.style.width = `${(circlesNumber / (circles.length - 1)) * 100}%`;

  if (!circles[circlesNumber].classList.contains("active")) {
    circles[circlesNumber].classList.add("active");
  }
});

prevBtn.addEventListener("click", () => {
  circlesNumber = circlesNumber < 1 ? 1 : circlesNumber;

  if (circles[circlesNumber].classList.contains("active")) {
    circles[circlesNumber].classList.remove("active");
  }
  circlesNumber--;
  movingBar.style.width = `${(circlesNumber / (circles.length - 1)) * 100}%`;
});
