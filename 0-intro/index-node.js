// console.log(global);
console.log('without global object');
global.console.log('this runs at both places');

setTimeout(function() {
    console.log('printed after 3 secs');
}, 3000);

var interval = setInterval(function() {
    console.log('prints every 2 seconds');
}, 2000);

setTimeout(function() {
    clearInterval(interval);
}, 10000);
