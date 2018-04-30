function checkIfEven(num, success, failure ) {
    if (typeof num === 'number') {
        if (num % 2 === 0) { // (num % 2)
            if (typeof success === 'function') {
                success('num is even');
            }
        } else {
            if (typeof failure === 'function') {
                failure('num is odd');
            }
        }
    }
}
checkIfEven(20);
checkIfEven(30, success, failure);
checkIfEven(31, success, failure);

function success(msg) {
    console.log('success');
    console.log(msg);
}

function failure (msg) {
    console.log('failure');
    console.log(msg);
}

// var arr = [1, 2, 3];
// arr.forEach();

// setTimeout
var func = function(){
    console.log('set time out is called');
};
setTimeout(func, 3000);

console.log('log below the set time out call');