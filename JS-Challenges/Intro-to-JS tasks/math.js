let randomNumber = Math.floor(Math.random() * 100) + 1;

function tempConverter(temp, unit) {
  if (unit.toUpperCase() == "C") {
    return (temp * 9) / 5 + 32;
  }
  if (unit.toUpperCase() == "F") {
    return ((temp - 32) * 5) / 9;
  }
}

console.log(tempConverter(randomNumber, "C"));
console.log(tempConverter(randomNumber, "F"));
