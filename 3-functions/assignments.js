// let us develop a scietific calculator
function calculate() { // it will take the action as the first parameter and the values for the action in the next sequence of parameters
    console.log(arguments, typeof arguments);
    var result = null;
    if (arguments[0] == 'add' || arguments[0] == 1) {
        result = 0;
        for (var key in arguments) {
            if (key !== '0' && typeof arguments[key] === 'number') {
                result += arguments[key];
            }
        }
    }
    if (arguments[0] == 'sub' || arguments[0] == 2) {

    }
    if (arguments[0] == 'mul' || arguments[0] == 3) {
        result = 1;
        for (var key in arguments) {
            if (key !== '0' && typeof arguments[key] === 'number') {
                result *= arguments[key];
            }
        }
    }
    if (arguments[0] == 'div' || arguments[0] == 4) {

    }
    return result;
}

var addResult = calculate('add', 70, 'adf', 34, 2.0, -5);
var addResult1 = calculate(1, 70, 'adf', 34, 2.0, -5);
var mulResult = calculate(3, 5, 7);
console.log(addResult, addResult1, mulResult);