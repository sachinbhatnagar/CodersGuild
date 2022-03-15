const squareList = (arr) => {
  const positives = arr.filter((num) => {
    if (num > 0 && Number.isInteger(num)) {
      return num;
    } else {
      return false;
    }
  });
  const squared = positives.map((num) => {
    return num * num;
  });
  return squared;
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
