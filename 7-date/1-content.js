// what is a date object
// form where does it take the current date
// ways to create a Date
    // new Date()
    // new Date(86400000)
    // new Date("October 13, 2014 11:13:00")
    // new Date(99, 5, 24, 11, 33, 30, 0)
// timezone - javascript will take the browsers time zone
    // UTC
    // GMT
// Date formats - By default it will display the full text format
    // ISO - "2017-12-25" - ISO 8601
    // Short date - "12/25/2017"
    // Long date - "Dec 25 2017" OR "25 Dec 2017"
    // Full date - "Friday December 25 2017"
// ISO dates
    // only year
    // only year and month
    // date and time - "2015-03-25T12:00:00Z" - T for seperation and Z for UTC time
    // date and time - "2015-03-25T12:00:00-06:30"
// Short Dates
    // "12/25/2017"
    // beahaviour of "YYYY/MM/DD" and "DD-MM-YYYY" is not defined
// Long dates
    // mostly written with "MMM DD YYYY" syntax.
    // month and day can be in any order
    // month can be in full or abbreviated
    // names are case insensitive and commas if any are ignored
// Full dates
    // "Fri Dec 25 2017 09:56:24 GMT+0100 (Tokyo Time)"
// methods
    // toString()
    // toUTCString()
    // toDateString()
    // getDate()
    // getDay()
    // getFullYear()
    // getHours()
    // getMilliseconds()
    // getMinutes()
    // getMonth()
    // getSeconds()
    // getTime() - get the time in milliseconds since Jan 1,1970
    // Date.parse() - get the milliseconds since
// dates comparison

// TODO item - learn how to change form one date format to another