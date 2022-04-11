const menuItems = document.querySelectorAll(".menu");
const total = document.getElementById("total");
const tip = document.getElementById("tip");

let accumulator = 0;

menuItems.forEach((element) => {
  element.addEventListener("click", function () {
    accumulator += Number(element.getAttribute("data-price"));

    total.innerText = (Math.floor(accumulator * 10) / 10).toFixed(2);

    let totalTip = accumulator + (accumulator / 100) * 15;
    tip.innerText = totalTip.toFixed(2);
  });
});
// tip.innerText = (Math.floor(totalTip * 10) / 10).toFixed(2);
