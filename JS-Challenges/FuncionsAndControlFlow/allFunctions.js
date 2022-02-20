const areaOfCircle = (radius) => {
  let squared = Math.PI * radius ** 2;
  return Math.round(squared * 100) / 100;
};

const halfNumber = (num) => {
  return `Half of ${num} is ${num / 2}`;
};

// What number is bigger?
// Write a function that compares two numbers and returns the larger one. Be sure to try it out with some different numbers. Bonus: add error messages if the numbers are equal or cannot be compared.
let first = Math.floor(Math.random() * 10);
let second = Math.floor(Math.random() * 10);
function larger(num1, num2) {
  if (num1 === num2) {
    console.log("error");
  } else if (num1 > num2) {
    return `${num1} is bigger than ${num2}`;
  } else {
    return `${num2} is bigger than ${num1}`;
  }
}

const anyNumber = (cb, num) => {
  return cb(num);
};
console.log(anyNumber(halfNumber, 10));
