// Larger than 5 
// given an array, return an array of the same length
// where all elements <= 5 is changed to 0

const largerThan5 = (a, i=0, newA=[]) => {
  if (i === a.length) return newA;
  (a[i] <= 5) ? newA.push(0) : newA.push(a[i]);
  return largerThan5(a, i+1, newA);
};

console.log(largerThan5([1,5,6])); // should return [0,0,6]
console.log(largerThan5([6,5,4])); // should return [6,0,0]
console.log(largerThan5([])); // should return []
