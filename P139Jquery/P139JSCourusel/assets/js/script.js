"use strict";

let rightIcons = document.querySelector(
  ".slider-area .slider .icons i:nth-child(2)"
);
let leftIcons = document.querySelector(
  ".slider-area .slider .icons i:nth-child(1)"
);


$(function () {
  let rightIcons = $(".slider-area .slider .icons i:nth-child(2)");
  let leftIcons = $(".slider-area .slider .icons i:nth-child(1)");
  let activeSlider = $(".active-slider");
  let slideImg = $(".images img");

  setInterval(() => {
    let activeSlider = $(".active-slider");

    if (activeSlider.next().length != 0) {
      activeSlider.removeClass("active-slider");
      activeSlider.next().addClass("active-slider");
    } else {
      activeSlider.removeClass("active-slider");
      activeSlider.parent().children().first().addClass("active-slider");
    }
  }, 2000);

  rightIcons.click(function () {
    let activeSlider = $(".active-slider");
    if (activeSlider.next().length != 0) {
      activeSlider.removeClass("active-slider");
      activeSlider.next().addClass("active-slider");
    } else {
      activeSlider.removeClass("active-slider");
      activeSlider.parent().children().first().addClass("active-slider");
    }
  });

  leftIcons.click(function () {
    let activeSlider = $(".active-slider");

    console.log(activeSlider.prev());
    if (activeSlider.prev().length != 0) {
      activeSlider.removeClass("active-slider");
      activeSlider.prev().addClass("active-slider");
    } else {
      activeSlider.removeClass("active-slider");
      activeSlider.parent().children().last().addClass("active-slider");
    }
  });
});
