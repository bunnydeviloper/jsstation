// jssCountX
// create a jssCountX function for array
// that takes in an element and counts the number of times
// that element shows up in the array

const jssCountX = (a, n, i=0, counter=0) => {
  if (i === a.length) return counter;
  if (a[i] === n) counter += 1;
  return jssCountX(a, n, i+1, counter);
};

console.log(jssCountX([1,5,6,1,5,1,1], 1)); // should return 4
console.log(jssCountX([6,5,4,4], 4)); // should return 2
console.log(jssCountX([1,2,3], 1)); // should return 1
console.log(jssCountX([], 1)); // should return 0
