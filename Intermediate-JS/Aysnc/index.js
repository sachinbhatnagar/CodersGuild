// Generate numbers from 0-30 using a for loop. Return all the even numbers doubled.

function foo(arr) {
  let myArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      myArr.push(instructions(arr[i]));
    }
  }
  return myArr;
}
function instructions(num) {
  return num * num;
}

console.log(foo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
