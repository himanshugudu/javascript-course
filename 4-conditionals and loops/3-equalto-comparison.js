(function () {
    "use strict"

    var numstr = '123';
    var num = 123;
    var str = 'abc';
    var str = 'def';
    var nullVal = null;
    var undefinedVal = undefined;
    var arrayEmpty = [];
    var arrayWithVal = [1, 2, 3];
    var objEmpty = {};
    var objWithVal = {
        'name': 'asf'
    };
    var bool = true;
    var func = function () {};

    // check the nullability of a variable
    var falseArray = [null, undefined, 0, NaN, [], false, {}, ''];
    for (var i = 0; i < falseArray.length; i++) {
        if (falseArray[i]) {
            console.log(falseArray[i] , 'is true');
        } else {
            console.log(falseArray[i] , 'is false');
        }
    }

    if (10 % 2 == 0) {
        console.log('10 is even');
    }

    if (!(10 % 2)) {
        console.log('10 is even');
    }

    // == comparison
    if (numstr === num) {
        console.log('string 123 === number 123');
    } else if (numstr == num) {
        console.log('string 123 !== number 123');
        console.log('string 123 == number 123');
    } else {
        console.log('string 123 !== number 123');
    }

    var temp;
    // how do you check the existence or nullability
    if (temp && temp !== 0) {
        if (typeof temp == 'function') {
            temp();
        } else if (temp.length !== 0) {
            // do the array operation
        } else if (temp.keys().length !== 0) { // here we assumed that the obj has a property called 'name'
            // do the object operation
        } else {
            //  do the primitive operations
        }
    }
})();