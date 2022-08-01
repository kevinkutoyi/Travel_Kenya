const nav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
  const visiblity = nav.getAttribute("data-visible");
  if (visiblity === "false") {
    nav.setAttribute("data-visible", true);
  } else {
    nav.setAttribute("data-visible", false);
  }
});

// let dots = document.querySelector(".flow");
// var counter = 1;
// setInterval(function () {
//   document.querySelector(".flow" + counter);

//   counter++;
//   if (counter > 4) {
//     counter = 1;
//   }
// }, 5000);
