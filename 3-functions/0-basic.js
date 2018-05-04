// what is a function ?
// how to define it
// how to execute it
// how to call in diff ways
// arguments in function and how are they diff from JAVA
// scope in function - this is important
// hoisting in functions - this is important
// self invoking functions -- which i also call as IIFE(Immediate invoking function expression)
// closures in function
// recursive mechanism
// this keyword
// to use call(), apply() and bind()
// callbacks


// function keyword
// function name
// function arguments
// function body
// function test(a, b) {
//     console.log('function executed...');
//     return 123;
// }
// test();

// lets create a function called CalculateSimpleInterest()
function calculateSimpleInterest(p, t, r) {
    // var p = 1000;
    // var t = 1;
    // var r = 10;
    // if (p != undefined && t != undefined && r != undefined) {
    //     var si = (p * r * t)/100;
    //     console.log('simple interest is -', si);
    // }
    var si = (p * r * t)/100;
    if (!isNaN(si)) {
        console.log('simple interest is -', si);
        return si;
    }
}
calculateSimpleInterest(1000, 1, 3);
calculateSimpleInterest(10000, 1);
calculateSimpleInterest(10000, 2);
calculateSimpleInterest(1000, 1, 5);

console.log("#######################################");

// suppose there is a another method which takes the interest and principle and displays the total amount
// function displayAmount(p, i) {
//     console.log('amount is', p + i);
// }
// var displayAmount;

// say i want to calculate the total amount for p=1000, t=1, r=10
// get the interest
var p = 1000;
var r = 10;
var t = 1;
var interest = calculateSimpleInterest(p, t, r);
if (typeof displayAmount == 'function') {
    displayAmount(p, interest);
}

// // console.log("#####################################");

var func;
// func(); // uncomment it and see for yourself what is the output
if (typeof func === 'function') {
    func();
}

func = function () {
    console.log('now i am a function');
};
func();

// call it in diff ways
function fn() {
    console.log('function as a function name');
}
var fn1 = function () {
    console.log('function as function variable name');
}
fn();
console.log(typeof fn, typeof fn1);

// console.log("#######################") 
// console.log("Anonymous functions")
// console.log("#######################")