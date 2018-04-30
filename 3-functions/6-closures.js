function add(a, b){
    return a + b;
}
add(1, 2);
// console.log(a);

function sum(a){
    var inner = function(b) {
        console.log(a + b);
    }
    return inner;
}

// var abc = 'sum';
// var abc = sum;
// console.log(abc, sum);
var abc = sum(10);
console.log(abc); // [10, 10, undefined, undefined] => all are wrong
abc(10);
// var result  = abc(20);
// console.log('result', result);

// add 3 numbers
function sum(a){
    return function(b){
        return function(c){
            return a + b + c;
        }
    }
}
console.log(sum(10)(20)(30));

// function multiply(b){
//     return sum(10)(20)(30) * b;
// };
