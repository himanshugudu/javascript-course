console.log('---------\naddition with string\n----------');
console.log(5 + 5); // 10
console.log('5' + 5); // 55
console.log(5 + '5'); // 55
console.log(5 + 'a' + 5); // 5a5
console.log('a' + 5 + 5); // a55
console.log(5 + 5 + 'a'); // 10a
console.log(NaN + 5); // NaN
console.log(NaN + '5'); // NaN5

// console.log('---------\nsubtraction with string\n----------');
console.log('5' - 5); // 55, 5
console.log(5 - '5'); // 0, 55
console.log(5 - '5a'); // 55a
console.log('5a' - 5); // 5a5, 5a

console.log('---------\nmultiplication with string\n----------');
console.log('5' * 5); // 25
console.log(5 * '5'); // 25
console.log(5 * '5a'); // NaN
console.log('5a' * 5); // NaN

console.log('---------\ndivision with string\n----------');
console.log('5' / 5); // 1
console.log(5 / '5'); // 1
console.log(123/'5'); // 
console.log('123'/5); // 
console.log('123a'/5); // NaN