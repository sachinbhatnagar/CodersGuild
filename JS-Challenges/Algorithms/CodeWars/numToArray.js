// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example:

function numToArray(num) {
  let string = String(num);
  let numbers = string.split("").reverse();
  let result = numbers.map(function (item) {
    return parseInt(item, 10);
  });
  return result;
}
console.log(numToArray(348597));
console.log(numToArray(35231));
