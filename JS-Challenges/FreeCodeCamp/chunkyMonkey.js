// Chunky Monkey
// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {
  let newArr = [];
  let count = Math.ceil(arr.length / size);
  console.log(count);
  let start = 0; //starting
  let end = size; //ending end = 2
  for (let i = 0; i < count; i++) {
    // console.log('Run')
    newArr.push(arr.slice(start, end));
    start = end; //start = 0, end = 2
    end = end + size;
    //  start = size
  }
  console.log(newArr);
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3);
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4);
