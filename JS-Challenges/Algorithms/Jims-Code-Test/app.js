// Create a modular scalable system for working out the average from the array below. (Please copy it exactly)

//

// The answer should be 16.2307692

const array = [3, 7, "df", "3", 7, 8, "df", 23, 6, 2, 67, "g", "34", 12, 34, 5];
const newArray = [];
for (let i = 0; i < array.length; i++) {
  if (!isNaN(array[i])) {
    newArray.push(Number(array[i]));
  }
}

const average = newArray.reduce((a, b) => a + b, 0);
console.log(average / newArray.length);
