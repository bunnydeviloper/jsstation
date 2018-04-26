// N String: take in a number and a String
// return the string repeated n number of times

const nStr = (n, word, str='') => {
    if (n === 0) return str;
    str = str + word;
    return nStr(n-1, word, str);
};

console.log(nStr(1, 'abc')); // should be 'abc' 
console.log(nStr(4, 'abc')); // should be 'abcabcabcabc'
console.log(nStr(0, 'abc')); // should be ''
console.log(nStr(1, ''));    // should be ''
