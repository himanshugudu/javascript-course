console.log(Number);
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.POSITIVE_INFINITY);
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.NaN);

//isNaN()
console.log('-----------is NaN ---------');
console.log(isNaN('afd'));
console.log(isNaN(2));

//methods
console.log('---------- methods -----------');
var num = 10;
console.log('num',10,'in base 10 -', num.toString());
console.log('num',10,'in base 16 -', num.toString(16));
console.log('num',10,'in base 8 -', num.toString(8));
console.log('num',10,'in base 2 -', num.toString(2));

console.log('---------\ntoFixed()\n------------');
var floatNum = 10.59;
console.log(floatNum.toFixed());

console.log('---------\ntoPrecision()\n------------');
var floatNum = 110.4990;
console.log(floatNum.toPrecision(5));

console.log('------- valueOf() ---------');
var objNum = new Number(20);
console.log(typeof objNum);
console.log(typeof objNum.valueOf());

console.log('---------paresInt()--------');
console.log('number value of "123" is ', parseInt("123"));
console.log('number value of "123a" is ', parseInt("123a"));
console.log('number value of "a123" is ', parseInt("a123"));
console.log('number value of "123a456" is ', parseInt("123a456"));