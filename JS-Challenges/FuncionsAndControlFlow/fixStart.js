// Create a function called fixStart. It should take a single argument, a string, and return a version where all occurrences of its first character have been replaced with ‘*****’, except for the first character itself. You can assume that the string is at least one character long. For example:

const fixStart = (str) => {
  let split = str.split("");
  const first = split[0];
  for (let i = 1; i < split.length; i++) {
    if (split[i] === first) {
      split[i] = "*";
    }
  }
  return split.join("");
};

console.log(fixStart("babble"));
