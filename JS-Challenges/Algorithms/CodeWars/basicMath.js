// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

function basicMath(operator, value1, value2) {
  switch (operator) {
    case "+":
      return value1 + value2;
      break;
    case "-":
      return value1 - value2;
      break;
    case "*":
      return value1 * value2;
      break;
    case "/":
      return value1 / value2;
      break;
  }
}
console.log(basicMath("+", 4, 7));
console.log(basicMath("-", 15, 18));
console.log(basicMath("*", 5, 5));
console.log(basicMath("/", 49, 7));
