var global = 'a global variable';
var module1 = function () {
    var test = "abc";
    var fn = function () {
        console.log('some function');
    };
    console.log(global);
    fn();
};
var module2 = function () {
    var test = "abc";
    var fn = function () {
        console.log('some function');
    };
    console.log(global);
    fn();
};
var module3 = function () {
    var test = "abc";
    var fn = function () {
        console.log('some function');
    };
    console.log(global);
    fn();
};
module1();
module2();
module3();

// IIFE - Immediate Invoking Function Expression
// in the above example 'global' variable is referring the window context
// but in the below example when we use iife context scope is limited to the function.

// (function (){
//     var global = 'a global variable';
//     var fn = function () {
//         var test = "abc";
//         var fn = function () {
//             console.log('some function');
//         };
//         console.log(global);
//         fn();
//     }
// })();

// // one more example of a iife 
// console.log("######### iife example 2 ###########");
// (function (w, a) {
//     var test = function () {
//         return 'world';
//     }
//     test();


//     console.log('world');
//     console.log(a);

//     function test1() {
//         console.log();
//     }
//     w.test = test;
// })(window, 10);

// console.log('calling test from window : ', test());
// console.log('calling test1 from window : ', test1());