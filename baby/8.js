// jssSum
// create a jssSum function for array
// that return the sum of all elements in the array

const jssSum = (a, i=0, sum=0) => {
  if (i === a.length) return sum;
  sum = sum + a[i];
  return jssSum(a, i+1, sum);
}

console.log(jssSum([1,5,6])); // should return 12
console.log(jssSum([6,5,4])); // should return 15
console.log(jssSum([1,2,3])); // should return 6
console.log(jssSum([])); // should return 0
