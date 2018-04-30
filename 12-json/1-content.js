// About :-
// 1. JSON - javascript object notation
// 2. extension is .json
// 3. JSON Internet Media type is application/json

// Uses :-
// 1. Transfer data between servers and web applications

// Usage :-

// Methods for JSON
// stringify
// parse
// global object JSON

var parent = {
    child: [{
        name: "abc",
        age: 15
    }, {
        name: def,
        age: 20
    }]
}

console.log('age of second child', parent.child[1]['age']);
