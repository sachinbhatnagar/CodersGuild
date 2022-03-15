const menuItems = document.querySelectorAll(".menu");
const total = document.getElementById("total");
const tip = document.getElementById("tip");
const flag = true;
let accumaltor = 0;
menuItems.forEach((element) => {
  element.addEventListener("click", function () {
    accumaltor += Number(element.getAttribute("data-price"));

    total.innerText = Math.floor(accumaltor * 10) / 10;

    let totalTip = (accumaltor / 100) * 15;
    tip.innerText = Math.floor(totalTip * 10) / 10;
  });
});

// const itemAdded = element.getAttribute("data-added");

// if (itemAdded === "false") {
//   accumaltor += Number(element.getAttribute("data-price"));
//   element.setAttribute("data-added", "true");
// } else {
//   element.setAttribute("data-added", "false");
//   accumaltor -= Number(element.getAttribute("data-price"));
// }
