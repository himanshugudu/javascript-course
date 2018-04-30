// methods
var date = new Date();
console.log('today -', date);

console.log('\n------\ntoString()\n------');
console.log(date.toString());

console.log('\n------\ntoUTCString()\n------');
console.log(date.toUTCString());

console.log('\n------\ntoDateString()\n------');
console.log(date.toDateString());

console.log('\n------\ngetDate()\n------');
console.log(date.getDate());

console.log('\n------\ngetDay()\n------');
console.log(date.getDay());

console.log('\n------\ngetMonth()\n------');
console.log(date.getMonth());

console.log('\n------\ngetFullYear()\n------');
console.log(date.getFullYear());

console.log('\n------\ngetTime()\n------');
console.log(date.getTime());

// Date comparison
var date2 = new Date('2017-04-18');
if(date > date2){
    console.log('today is > april 18')
}