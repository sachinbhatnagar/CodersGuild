// Can you find the needle in the haystack?

// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so:

function findNeedle(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "needle") {
      return "found the needle at position " + i;
    }
  }
  return arr;
}

console.log(
  findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"])
);
