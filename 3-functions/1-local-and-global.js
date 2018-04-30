console.log(window);

var temp3 = '678';
var temp2 = '345';
var run = function() {
    var temp = '123';
    // temp2 = '345'; // this is not recommended
    // return temp;
}
run();
window.run();
// line number 9 and 10 are exactly the same.

// console.log('temp = ', temp); // temp variable is created as a local variable for the function run. so it is not available here.

console.log('temp2 = ', temp2);// temp2 is created without using the 'var' keyword. so it is availabel globally

// console.log('temp3 = ', temp3);// temp3 is created without using the 'var' keyword. so it is availabel globally

// NOTE :- ALWAYS USE 'var' KEYWORD WHEN YOU DECLARE A VARIABLE

console.log(window.temp2); // temp2 gets created in the window scope
console.log(window.temp);
console.log(window.temp3);
console.log(window.run);
console.log(window.run());
// what if i write the line 25 in this way
var r = window.run();
console.log(r);
console.log('window', window);