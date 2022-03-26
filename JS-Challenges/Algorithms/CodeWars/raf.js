// Complete the function that takes two numbers as input, num and nth an the nth digit of num (counting from right to left).

// Note
// If num is negative, ignore its sign and treat it as a positive value

// Keep in mind that 42 = 00042. This means that findDigit(42, 5) would be 0
// Examples(num, nth --> output)

var findDigit = function (num, nth) {
  // If nth is not positive -1
  if (nth <= 0) {
    return -1;
  }
  // convert the number into a string.
  let stringNumber = String(num);
  // get the length of the string
  let length = stringNumber.length;
  // remove the '-' using regex and replace
  if (stringNumber[0] === "-") {
    stringNumber = stringNumber.replace("-", 0);
  }

  // If the number is 045 and it asks us to go back 5, well, we can't because there is no number there.
  if (nth > length) {
    return 0;
  } else {
    return Number(stringNumber[length - nth]);
  }
};

console.log(findDigit(5673, 4));
console.log(findDigit(129, 2));
console.log(findDigit(-2825, 3));
console.log(findDigit(-456, 4));
