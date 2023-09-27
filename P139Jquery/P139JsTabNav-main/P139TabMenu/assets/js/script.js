

$(function () {
  let tabMenu = $(".tabContainer>ul li");
  let tabText = document.querySelectorAll(".tabText p");
  let dropDownContent = $(".dropwDownContent");

  tabMenu.click(function () {
    if ($(this).hasClass("dropDownBtn")) {
      dropDownContent.removeClass("d-none");
    } else {
      dropDownContent.addClass("d-none");
      $(".active-tab").removeClass("active-tab");

      $(this).addClass("active-tab");

      tabText.forEach((text) => {
        if (text.getAttribute("data-id") == this.getAttribute("data-id")) {
          text.classList.remove("d-none");
        } else {
          text.classList.add("d-none");
        }
      });
    }
  });
});
