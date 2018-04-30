var bool = true;
var boolObj = new Boolean(true);

console.log('boolean primitive -', bool);
console.log('boolean object -', boolObj);
console.log('typeof bool -', typeof bool);
console.log('typeof boolObj -', typeof boolObj);

if (bool == boolObj) {
    console.log('bool primitive is equal to object');
}

if (bool === boolObj) {
    console.log('bool primitive is strict equal to object');
} else {
    console.log('bool primitive is NOT strict equal to object');
}

// methods
// toString()
console.log('\n---------------\ntoString()\n-------------');
console.log('bool to string -', bool.toString());
console.log('typeof bool to string -', typeof bool.toString());
console.log('bool object to string -', boolObj.toString());
console.log('typeof bool object to string -', typeof boolObj.toString());

//valurOf()
console.log('\n--------------\nvalueOf()\n-----------');
console.log('value of primitive boolean -', bool.valueOf());
console.log('typeof value of primitive boolean -', typeof bool.valueOf());
console.log('value of object boolean -', boolObj.valueOf());
console.log('typeof value of object boolean -', typeof boolObj.valueOf());