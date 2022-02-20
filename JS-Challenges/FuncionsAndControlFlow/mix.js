// Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:

const mixUp = (str, str1) => {
  let split = str.split("");
  let split1 = str1.split("");
  let slice = split.slice(0, 2);
  let slice1 = split1.slice(0, 2);

  for (let i = 0; i < 2; i++) {
    split[i] = slice1[i];
    split1[i] = slice[i];
  }

  return `${split.join("")} ${split1.join("")}`;
};

console.log(mixUp("mix", "pod"));
console.log(mixUp("dog", "dinner"));
