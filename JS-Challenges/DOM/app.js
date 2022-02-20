document.body.style.fontFamily = "Arial, sans-serif";
const nickname = document.getElementById("nickname");
const favorites = document.getElementById("favorites");
const hometown = document.getElementById("hometown");
nickname.innerText = "Floyd";
favorites.innerText = "Learning Spanish";
hometown.innerText = "Neath";

const items = document.querySelectorAll("li");
let image = document.createElement("img");
const src =
  "https://cdn.vox-cdn.com/thumbor/JiRzoaU535Vs9YjU6LcJSvIGFBs=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19224216/mb_yahoo_02.jpg";
image.setAttribute("src", src);
image.setAttribute("height", "100px");
image.setAttribute("width", "100px");
image.setAttribute("alt", "yahoo logo");
const div = document.createElement("div");
div.appendChild(image);
const body = document.getElementById("body");
body.append(div);

for (let i = 0; i < items.length; i++) {
  items[i].classList.add("listitem");
}
