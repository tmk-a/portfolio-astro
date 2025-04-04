document.addEventListener("DOMContentLoaded", () => {
  var acc = document.querySelectorAll(".accordion__accordion");

  Array.from(acc).forEach((el) => {
    el.addEventListener("click", function () {
      var panel = this.nextElementSibling;
      var plusIcon = this.querySelector(".accordion__accordion-plus");
      var angleIcon = this.querySelector(".accordion__accordion-angle");

      plusIcon.classList.toggle("fa-plus");
      plusIcon.classList.toggle("fa-minus");
      angleIcon.classList.toggle("rotate");
      this.classList.toggle("active");

      if (panel.style.maxHeight && panel.style.maxHeight !== "0px") {
        panel.style.maxHeight = "0px";
        panel.style.opacity = "0";
        setTimeout(() => {
          panel.style.display = "none";
        }, 300);
      } else {
        panel.style.display = "block";
        setTimeout(() => {
          panel.style.maxHeight = panel.scrollHeight + "px";
          panel.style.opacity = "1";
        }, 10);
      }
    });
  });
});
