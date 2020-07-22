var arr = [1, 2, 3, 4, 2, 5];
var arr2 = [12, 23, 34, 45, 56, 67, 78];
console.log(arr);
console.log(arr2);

// loop through a array
// way 1
var arr2Length = arr2.length;
for (var i = 0; i < arr2Length; i++) {
    console.log('arr2[', i, '] =', arr2[i]);
}

// way 2
arr2.forEach(function (item, index) {
    console.log('item at index', index, 'is', item);
});

// concat method
console.log('--------concat----------');
var concatArr = arr.concat(arr2).concat(['a', 'b']);
var concatArrUsingPlus = arr + arr2;
console.log('\n', concatArr, concatArrUsingPlus, typeof concatArrUsingPlus);

// indexOf
console.log('--------indexOf----------');
console.log('index of 2 in arr =', arr.indexOf(5));
console.log('index of 20 in arr =', arr.indexOf(20));

// lastIndexOf
console.log('--------lastIndexOf----------');
console.log('lastIndexOf 2 in arr =', arr.lastIndexOf(2));

// join
console.log('--------join----------');
console.log('typeof ', arr.join('*'), 'is', typeof arr.join('*'));

// toString
console.log('--------toString----------');
var arrString2 = arr.toString();
console.log(arrString2);

// split
console.log('--------split----------');
var arrString = arr.join('*');
console.log('arrString of array', arr, ' is ', arrString);
console.log('arr from the arrayString -', arrString.split('*'));

var sentence = 'I want to learn javascript nicely';
var sentenceSplit = sentence.split('to')
console.log('array of "', sentence, '" split by "to" is ', sentenceSplit);
console.log(sentenceSplit.join('to'));

// // pop and push
// console.log('---------push and pop-------------');
// arr.push(10);
// console.log(arr);
// var popElement = arr.pop();
// console.log(popElement, 'is popped out of array', arr);

// // shift and unshift

// // slice
// // first parameter is start index
// // second parameter is end index, however it will be excluded
// var arr3 = arr2.slice(2, 5);
// console.log('-----------SLICE------------');
// console.log('arr2 - ', arr2);
// console.log(arr3);

// // splice method
// // first parameter is start index
// // second parameter is number of items
// console.log('----------SPLICE------------');
// console.log('arr2 -', arr2);
// var arr4 = arr2.splice(2, 2, 'item1', 'item2', 'item3');
// console.log('arr2 -', arr2);
// console.log('arr4 -', arr4);