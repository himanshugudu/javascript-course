var Promises = function(fn) {
    var resolve = function(args) {
        console.log('args in resolve method', args);
    }
    var reject = function(args) {
        console.log('args in reject method', args);
    }
    fn(resolve, reject);
}

var test = function(bool) {
    return Promises(function promiseFunc(resolve, reject) {
        if (bool) {
            resolve('resolved');
        } else {
            reject('rejected');
        }
    });
}

test(false);

var callback = function() {
    console.log('i am the callback');
};

var checkIf20 = function(num, fn) {
    if (num === 20) {
        if (typeof fn === 'function') {
            fn();
        }
        return true;
    }
    return null;
}
console.log('if the num is 20', checkIf20(20));
console.log('if the number is 20 and callback executed -', checkIf20(20, callback));