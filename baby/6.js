// Elements larger than 5
// Given an array, return an array of numbers larger than 5

const largerThan5 = (a, i=0, newA=[]) => {
  if (i === a.length) return newA;
  if (a[i] > 5) newA.push(a[i]);
  return largerThan5(a, i+1, newA);
};

console.log(largerThan5([1,5,6])); // should print out [6]
console.log(largerThan5([6,5,4])); // should print out [6]
console.log(largerThan5([1,2,3])); // should print out []
