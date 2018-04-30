var promiseFunc = function (bool) {
    if (bool) {
        return 'resolved';
    } else {
        return 'rejected';
    }
}
// this call would give me 'resolved'
console.log(promiseFunc(true));

var promiseFunc2 = function (bool) {
    if (bool) {
        setTimeout(function () {
            return 'resolved';
        }, 5000);
    } else {
        setTimeout(function () {
            return 'rejected';
        }, 5000);
    }
}
console.log(promiseFunc2(true));

// lets try to solve this use case below using promises
console.log("########## Promise implementation");
// create a promise object
// pass a function to the promise object
// promise function accepts two parameters resolve and reject
var promiseFunc3 = function (bool) {
    var prom = new Promise(function (resolve, reject) {
        if (bool) {
            setTimeout(function () {
                // return 'resolved';
                resolve('resolved');
            }, 5000);
        } else {
            setTimeout(function () {
                // return 'rejected';
                reject('rejected');
            }, 5000);
        }
    });
    return prom;
}

var bool = true;
promiseFunc3(bool)
.then(function(response) {
    console.log('success handler called', response);
})
.catch(function(error) {
    console.log('failure handler called', error);
});

var promiseFunc4 = function(bool) {
    return new Promise(function(resolve, reject) {
        if (bool) {
            setTimeout(function() {
                console.log('promise 4 resolution time', new Date());
                resolve('resolved success 2');
            }, 8000);
        } else {
            setTimeout(function() {
                reject('rejected failure 2');
            }, 8000);
        }
    });
}

// Promise.all
console.time('timer');
console.log(new Date());
var prom3 = promiseFunc3(true);
var prom4 = promiseFunc4(false);

Promise.all([prom3, prom4])
    .then(function(datas) {
        console.log('resolved datas -', datas);
        console.timeEnd('timer');
    })
    .catch(function(data) {
        console.log('rejected data -', data);
        console.timeEnd('timer');
    });