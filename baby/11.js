// Call function smaller number of times
// Write a function that takes in two numbers and a function
// and calls the function the small input number of times

const smallestNumCalls = (a, b, f, n=Math.min(a, b)) => {
  if (n === 0) return; 
  f();
  return smallestNumCalls(a, b, f, n-1);
};

console.log(smallestNumCalls(3,4,() => {console.log('hello')})) 
//should print 'hello' 3 times
console.log(smallestNumCalls(2,2,() => {console.log('holaaa')})) 
//should print 'holaaa' 2 times
console.log(smallestNumCalls(3,0,() => {console.log('hi')})) 
//should print 'hi' 0 times
