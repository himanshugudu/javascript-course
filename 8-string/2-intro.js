// primitive way
var name = 'divya';
var name2 = new String('divya');

// object way
var name3 = 'harsha';
var name4 = new String('harsha');

if (name == name2) {
    console.log('primitive == object string')
}

if (name === name2) {
    console.log('primitive === object string')
} else {
    console.log('primitive !== object string')
}

// length property
console.log('length of name -', name.length);

// compare if it is a empty string
var test = 'adsfsa';
if (test !== '') {
    console.log(test, 'is not a empty string');
}