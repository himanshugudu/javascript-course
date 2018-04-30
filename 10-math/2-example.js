// Math.PI
console.log('Math.PI', Math.PI);

// ceiling 
var num = 6.409;
console.log('ceiling of number', num, 'is', Math.ceil(num));

// floor 
var num = 6.409;
console.log('floor of number', num, 'is', Math.floor(num));

// random
function getRandomNumber(min, max) {
    return min + Math.random() * (max - min);
}
console.log('random number ', Math.random());
console.log('random number between 10 and 11 -', getRandomNumber(10, 11));

console.log('random dots in 10 * 10 grid');
for (var i = 0; i < 10; i++) {
    console.log('x - ', getRandomNumber(0, 10));
    console.log('y - ', getRandomNumber(0, 10));
    console.log('-----------------');
}

//roun
console.log(Math.round(5.6));

//abs
console.log(Math.abs(5.6));
console.log(Math.abs(-5.6));
console.log(Math.abs(5.6) == Math.abs(-5.6));