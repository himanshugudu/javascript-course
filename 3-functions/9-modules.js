// closure and iife implementation
console.log('----------Module----------');

// module1 is a iife here which returns a json object with some keys
var module1 = (function () {
    var name = 'abc';
    var age = 20;
    var getAge = function () {
        return age;
    };
    // here obj contains only some of the properties from module1.basically we have done data abastraction here where we are hiding some and exposing some
    var obj = {
        "name": name,
        "getAge": getAge
    };
    return obj;
})(); // here we are not passing any arguments to iife function
console.log(module1);
console.log(module1.age);
console.log(module1.name);
console.log(module1.getAge());


// this is module2 which is accepting a module
var module2 = (function (module) {
    var name = '';
    if (module && module.name) {
        name = module.name + " - module2";
    }
    return {
        "name": name
    };
})(module1);// here we are passing module1 to the iife module2
console.log("name from module2 is :", module2.name);