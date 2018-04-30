var personJson = {
    height: '5-5',
    getHeight: function() {
        return this.height;
    }
}

console.log(personJson);
console.log(personJson.getHeight());

// to access the height key you can call it in two ways
// first way
console.log(personJson.height);
// second way
console.log(personJson['height']);

console.log("#################### Object - new ##########");

function Person(height, name) {
    var weight = 20; // this is a private variable

    function inchToMetre(val) {
        return val;
    }

    this.height = height;
    this.name = name;
    this.getHeightInMetres = function() {
            return 'Person\'s height in metres - ' + inchToMetre(this.height);
        }
    this.getComplexion = function() {
        return 'Complexion - ' + this.complexion;
    }
}

// we create a object from the function class
var personObj = new Person(6, 'John');
var personObj2 = new Person(10, 'rtst');
console.log(personObj, personObj2);
console.log(personObj.height);
console.log(personObj.getHeightInMetres());
console.log(personObj.getComplexion());
console.log(personObj2.getComplexion());

// if i want to access the private method
// console.log(personObj.inchToMetre()) // uncomment this to see the output
Person.prototype.getName = function() {
    return 'Name - ' + this.name;
}
console.log(personObj.getName());
console.log(personObj2.getName());

Person.prototype.complexion = 'fair';
console.log(personObj.getComplexion());
console.log(personObj2.getComplexion());

// using prototype globally
// we have read the "join" method in the Array module. how i can modify it using the prototype object of the "Array" class
Array.prototype.join2 = function(char) {
    // var strArr = [];
    var seperator = char || '*';
    // this.forEach(function(item, index) {
    //     strArr.push(item);
    // });
    return this.join(seperator);
}

var arr = new Array(10, 20, 30);
var arr2 = [1, 2, 3];
// console.log(arr.join2());
// console.log(arr2.join2());
console.log(arr.join2(), arr.join());

var forEach = function (callback) {
    var array = this;
    var arr2Length = array.length;
    for (var i = 0; i < arr2Length; i++) {
        console.log('my for each method');
        callback(array[i], i);
    }
};

Array.prototype.forEach2 = forEach;

// // create map class
// function Map(sp, ep) {
//     this.startpoint = sp || null;
//     this.endpoint = ep || null;
//     this.move = function() {

//     }
// }
