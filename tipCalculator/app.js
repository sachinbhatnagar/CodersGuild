const menuItems = document.querySelectorAll(".menu");
const total = document.getElementById("total");
const tip = document.getElementById("tip");

let accumaltor = 0;

menuItems.forEach((element) => {
  element.addEventListener("click", function () {
    accumaltor += Number(element.getAttribute("data-price"));

    total.innerText = Math.floor(accumaltor * 10) / 10;

    let totalTip = (accumaltor / 100) * 15;
    tip.innerText = Math.floor(totalTip * 10) / 10;
  });
});
