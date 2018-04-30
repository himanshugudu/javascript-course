//ways to create dates
console.log('date from empty date constructor is -', new Date())
console.log('date from number -', new Date(864000000000)); // number of miliseconds form date Jan 01,1970
console.log('date from long format -', new Date('April 19 2017 09:22'));
console.log('date from parameters -', new Date(2017, 04, 19, 09, 25, 23, 56));

// create date using different formats
console.log('\n------------\nDate Formats\n-------------');
console.log('date from ISO format -', new Date('2017-04-19'));
console.log('date from short format -', new Date('04/19/2017'));
console.log('date from long format -', new Date('Apr 19 2017 09:22'));
console.log('date from full date format -', new Date('Wednesday April 19 2017'));

// different results if we miss one parameter in ISO format
console.log('\n-------------\nISO Format\n--------------');
console.log('with only year -', new Date('2017'));
console.log('with only year and month -', new Date('2017-04'));
// console.log('with date and time zone -', new Date('Wed Apr 19 2017 09:43:16 GMT+0530 (IST)'));