var a = 10;
var b = 20;
var c = 30;
var d = 40;

var arr = [a, b, c, d];
var arr2 = [10, 20, 30, 40];
console.log(arr);
console.log(arr2);

// you can create array in 2 ways
// 1. using Array object
// 2. using the [] operator
var arrNew = new Array(123, 234, 345, 456);
console.log('arrNew is ', arrNew);

// now if we try to put all these variables in a array
// we have to do something like this.

var arr = [10, 20, 30, 40];
var arr = [a, b, c, d];
var arr2 = ['a', 'b', 'c', 'd'];
console.log(arr);
console.log(arr2);

// access the array values
console.log('2nd item of arr', arr, 'is ', arr[1]);

// typeof array will return you 'object'
console.log('typeof array - ', typeof arr);
if (arr && typeof arr == 'object' && arr.length && arr instanceof Array) {
    console.log('it is a array');
}

// to get the length of a the array
console.log('length of arr', arr, 'is ', arr.length, arr['length']);

// to create a empty array you can do this
var emptyArr = []; // this is always preferable
var emptyArr2 = new Array();

// to add elements to a array
var arr = [123, 234, 345];
// i want to add a item to the 3rd index
arr[3] = 456; // this is the 4th item at 3rd index

// what if I add a property to the array object
arr['text'] = 'this is a array'; // custom property
console.log('arr with the text property', arr);
console.log('length of arr with text property', arr.length, arr['length']);


// array example with diff datatype
var arr = [1, 2, 3];
// value 3 = arr[2];
arr = [1, 2, {
    'a': 3
}];
// value 3 = arr[2].a OR arr[2]['a']

arr = [{
        'b': 56
    }, {
        'c': 234,
        'd': [5, 6, 7]
    },
    [1, 3, [45, {
        'a': 27
    }]]
];

console.log('value 56 - ', arr[0]['b']);
console.log('value 234 - ', arr[1]['c']);
console.log('value 7 - ', arr[1]['d'][2]);
console.log('value 27 - ', arr[2][2][1]['a']);