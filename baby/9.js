// Even Array
// given an array, return an array of
// the same length where all odd elements are changed to 0

const evenArray = (a, i=0, newA=[]) => {
  if (i === a.length) return newA;
  (a[i] % 2 === 0) ? newA.push(a[i]) : newA.push(0);
  return evenArray(a, i+1, newA);
};

console.log(evenArray([1,5,6])); // should return [0,0,6]
console.log(evenArray([6,5,4])); // should return [6,0,4]
console.log(evenArray([])); // should return []
