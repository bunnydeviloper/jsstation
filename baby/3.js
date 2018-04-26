// Next multiple of 7
// Takes in an integer, returns the next number that is divisible by 7

const next7m = (x, n=x) => {
  if (x % 7 === 0) return x+7;
  if (n % 7 === 0) return n;
  return next7m(x, n+1);
};

console.log(next7m(-35)); // should return -28
console.log(next7m(7)); // should return 14
console.log(next7m(1)); // should return 7
