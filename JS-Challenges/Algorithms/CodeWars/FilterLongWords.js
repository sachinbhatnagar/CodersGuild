function filterLongWords(sentence, n) {
  //Solution here
  return sentence.split(" ").filter((word) => word.length > n);
}

console.log(filterLongWords("The quick brown fox jumps over the lazy dog", 4));
