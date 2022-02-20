const areaOfCircle = (radius) => {
  let squared = Math.PI * radius ** 2;
  return Math.round(squared * 100) / 100;
};
console.log(areaOfCircle(2));
