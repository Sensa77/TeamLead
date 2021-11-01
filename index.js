"use strict";

const arrowRight = document.querySelector(".review__arrow-right");
const arrowLeft = document.querySelector(".review__arrow-left");
const slider = document.querySelector(".slider");
const page = document.querySelectorAll(".review");
const button = document.querySelectorAll(".button");
const form = document.querySelector(".form");
var endDate = new Date().getTime() + 60 * 30 * 1000;
console.log(new Date(endDate));

let slideIndex = 1;
showSlides(slideIndex);

function showSlides(n) {
  if (n > page.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = page.length;
  }

  page.forEach((item) => item.classList.remove("review--active"));

  page[slideIndex - 1].classList.add("review--active");
}

function plusSlides(n) {
  showSlides((slideIndex += n));
}

arrowLeft.addEventListener("click", () => {
  plusSlides(-1);
});

arrowRight.addEventListener("click", () => {
  plusSlides(1);
});

button.forEach((item) => {
  item.addEventListener("click", (e) => {
    form.scrollIntoView({
      block: "nearest",
      behavior: "smooth",
    });
  });
});

var timer = setInterval(function () {
  let now = new Date().getTime();
  let t = endDate - now;
  if (t >= 0) {
    let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    let secs = Math.floor((t % (1000 * 60)) / 1000);
    document.querySelector(".form__timer-mins").innerHTML =
      ("0" + mins).slice(-2) + "<span class='form__label'> мин</span>";
    document.querySelector(".form__timer-secs").innerHTML =
      ("0" + secs).slice(-2) + "<span class='form__label'> сек</span>";
    // } else {
    //   document.querySelector("form__timer-title").innerHTML = "Время истекло";
    // }
  }
}, 1000);
