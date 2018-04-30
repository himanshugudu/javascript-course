var obj = {
    'name': 'abc',
    'age': 34,
    'getName': function () {
        console.log('i am a function');
    },
    'key': 78777877
}
console.log(obj.key);
console.log(obj['key']);

console.log('============ for loop start ===============');
for (var key in obj) {
    console.log('key is - ', key);
    // console.log(obj.key);
    console.log(obj[key]);
    if (typeof obj[key] === 'function') {
        obj[key]();
    }
    console.log('---------');
}


// in the constructor way
console.log('----------------------------------');
console.log('--------Iterating from the object constructor--------');
console.log('----------------------------------');

var Person = function () {
    this.name = 'abc';
    this.age = 34;
    this.getName = function () {
        console.log('i am a function', this.name);
    }
}

Person.prototype.getAge = function () {
    console.log('here is the age');
}

function Car() {

}

var personObj = new Person();
console.log('person obj - ', personObj);

if (personObj instanceof Person) { // here we checking the parent type
    for (var key in personObj) {
        if (personObj.hasOwnProperty(key)) {
            console.log(key);
            var fn = personObj[key];
            if (typeof fn === 'function') {
                fn();
            } else {
                console.log(fn);
            }
            console.log('--------------');
        }
    }
}