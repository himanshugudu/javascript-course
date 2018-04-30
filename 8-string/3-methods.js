var str = 'abcdefg';

console.log('char at index 3 of', str, 'is ', str.charAt(2));
console.log('char code at index 3 of', str, 'is ', str.charCodeAt(2));

// match
console.log('if string - def matches in', str, '-', str.match('def'));

// replace
console.log('replace abc in', str, 'with xyz', str.replace('abc', 'xyz'));
// original string does not changes, as strings are immutable in javascript

// search
console.log('search def in string', str, '-', str.search('def'));
console.log('search def in string using indexOf', str, '-', str.indexOf('def'));

// slice
// i want to slice efg from the string
console.log('slice efg from str', str, '-', str.slice(4, 7));

// split
console.log('array form of str', str, 'is', str.split(''));

// substr
console.log('sub str as 2 characers from index 3 of str', str, 'is', str.substr(3, 2));
console.log('sub string from index 3 of str', str, 'is', str.substring(3, 5));