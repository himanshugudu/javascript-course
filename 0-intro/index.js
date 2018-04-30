alert('javascript from a file');
console.log('this runs at both places');
console.log(window);

setTimeout(function() {
    console.log('printed after 3 secs');
}, 3000);

var interval = setInterval(function() {
    console.log('prints every 2 seconds');
}, 2000);

setTimeout(function() {
    clearInterval(interval);
}, 10000);