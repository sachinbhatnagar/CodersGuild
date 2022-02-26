// Create a modular scalable system for working out the average from the array below. (Please copy it exactly)

//

// The answer should be 16.2307692

let array = [
  3,
  7,
  "’df’",
  "’3’",
  7,
  8,
  "df",
  23,
  6,
  2,
  67,
  "’g’",
  34,
  12,
  34,
  5,
];

const filtered = array.filter((num) => {
  return typeof num === "number";
});
console.log(filtered);
const average = filtered.reduce((a, b) => a + b);
console.log(average / filtered.length);
