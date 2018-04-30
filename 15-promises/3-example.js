var flag = false;
var flag2 = false;

// for (var i = 0; i < 1000; i++) {
//     if (i === 999) {
//         flag = true;
//     }
// }

// setTimeout(function () {
//     flag = true;
// }, 1000);

var promise1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve(true);
    }, 3000);
});

// for (var i = 0; i < 100000; i++) {
//     if (i === 99999) {
//         flag2 = true;
//     }
// }

// setTimeout(function () {
//     flag2 = true;
// }, 3000);

var promise2 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve(true);
    }, 5000);
});

// if (flag && flag2) {
//     alert('both for loops done');
// }

Promise.all([promise1, promise2])
.then(function(){
    alert('both are done');
    var res = confirm("select ok or cancel");
    alert(res);
});