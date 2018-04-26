// Max of array
// given an array, return the largest element

const maxOfArray = (arr) => {
  if (arr.length === 0) return 0;
  return Math.max(...arr);
};

console.log(maxOfArray([1,5,6])); // should return 6
console.log(maxOfArray([6,10,4])); // should return 10
console.log(maxOfArray([])); // should return 0
