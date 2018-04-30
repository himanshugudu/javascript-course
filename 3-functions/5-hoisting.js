function run() {
    var x = 123;
    x = 1234;
    console.log(x); // 1234

    console.log('--------run----------');

    var test = 'hello';
    console.log(test); // hello

    printHello(test); // printHello is undefined
    function printHello(value) {
        console.log(value); // wont be called
    }

    // printString(test); // printString is undefined
    var printString = function (value) {
        console.log(value); // wont be called
    }

    return 'ok';
}
run();

// Two take aways from this :-
// 1. All the function definition is hoisted to the top of the scope
// 2. All the variable declarations is hoisted to the top of the scope


// the above method will be converted to this.
run2();
function run2() {
    var x;
    var test;
    function printHello(value) {
        console.log(value);
    }
    var printString;

    x = 123;
    x = 1234;
    console.log(x);
    console.log('--------run----------');
    test = 'hello';
    console.log(test);
    printHello('world');
    // printString('rtst');
    printString = function (value) {
        console.log(value);
    }
    printString('rtst');
    return 'ok';
}

// function run3() {
//     console.log('-----------run3-----------');
//     var fn = function () {
//         console.log('func 1');
//     }
//     fn();
//     fn2();
//     console.log(abc);
//     var abc = 50;
//     var fn = function () {
//         console.log('func 2');
//     }

//     function fn2() {
//         console.log('func 3');
//     }
// }
// //  run3();

// // above function run3 will be converted to this functon run4
// function run4() {
//     console.log("-------- run 4 ------------");
//     var fn;
//     var abc;
//     var fn;

//     function fn2() {
//         console.log('func 3');
//     }
//     fn = function () {
//         console.log('func 1');
//     }
//     fn();
//     fn2();
//     console.log(fn);
//     console.log(abc);
//     abc = 50;
//     fn = function () {
//         console.log('func 2');
//     }
// }

// //  run4();

// // // var abc = "abc";
// // // var abc;
// // // console.log('abc -', abc);