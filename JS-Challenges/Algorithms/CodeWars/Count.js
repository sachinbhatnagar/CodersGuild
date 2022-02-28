// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

function countPositivesSumNegatives(input) {
  let positives = 0;
  let sum = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] > 0) {
      positives++;
    }
    if (input[i] < 0) {
      sum += input[i];
    }
  }
  return [positives, sum];
}

console.log(
  countPositivesSumNegatives([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
  ])
);
