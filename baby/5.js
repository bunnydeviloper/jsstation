// jssForEach
// create a jssForEach function for array
// that takes in a function that gets called
// for every element in the array
// When calling the function, pass the value
// and the corresponding index

const jssForEach = (a, f, i=0) => {
  if (i === a.length) return;
  f(a[i], i);
  return jssForEach(a, f, i+1);
};

console.log(jssForEach([1,5,6], f = (a, b) => console.log(a, b))); 
// should print out 1,0  5,1  6,2 undefined
console.log(jssForEach([6,5,4], f = (a, b) => console.log(a, b))); 
// should print out 6,0  5,1  4,2 undefined
console.log(jssForEach([], f = (a, b) => console.log(a, b))); 
// should print out nothing and undefined
