const addToStore = document.getElementById("addToStore");
const calculation = document.getElementById("calculation");

const store = [];

addToStore.addEventListener("click", () => {
  const inputValue = document.getElementById("inputValue").value;
  document.getElementById("inputValue").value = "";
  console.log(inputValue);
  if (!isNaN(inputValue)) {
    store.push(Number(inputValue));
  }

  console.log(store);
});
calculation.addEventListener("click", () => {
  const output = document.getElementById("output");
  let total = 0;
  for (let i = 0; i < store.length; i++) {
    total += store[i];
  }

  output.innerText = `${total / store.length}`;
});
