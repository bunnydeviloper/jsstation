// JSS join
// create jssJoin function for arrays that takes in a string
// as delimiter and returns a string with all the elements separated by delimiter

const jssJoin = (a, d) => {
  return a.join(d);
}

console.log(jssJoin([], 'a')); // should return ''
console.log(jssJoin([1,2,3], '*')); // should return '1*2*3'
console.log(jssJoin([1,2,3], '')); // should return '123'
console.log(jssJoin([], '')); // should return ''
