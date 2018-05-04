// function addNumber(firstNumber, secondNumber)
// {
// 	var sum = firstNumber + secondNumber ;
//     return sum;
//     document.write(result);
// }
// var result = addNumber(30, 70, 90);
// document.write(result);


//if any case i am not passing the one parameter that time output display NaN
//why because one parameter value they have another parameter value don't have the that show undefine value + undefine is called NaN
//extra parameter value is ignored

// function addNumber(firstNumber, secondNumber)
// {
// 	var sum = firstNumber + secondNumber;
// 	document.write(sum);
// }
// var result = addNumber(30, 70);
// alert(result);

//function hoisting: By default,JavaScript moves all the function declaration to the top of the current scope.this is called function hoisting. this is the reason javascript function canbe called before they defined.
// var result = addNumber(60, 70);
// document.write(result);
// function addNumber(firstNumber, secondNumber)
// {
// 	var sum = firstNumber + secondNumber;
// 	return sum;
// }
//function expression:-A function expression allow us to define a function using an expression
//anonymous function expression
// var add =function (firstNumber, secondNumber)
// {
// 	var result = firstNumber + secondNumber;
// 	return result;
// }
// var sum = add(10, 60);
// document.write(sum);

//nameed function
// var factorial = function computeFactorial(number)
// {
//     if(number <= 1)
//     {
//         return 1
//     }
//     return number * computeFactorial(number - 1);
// }
// var result = factorial(5);
// document.write(result);
//self invoking function expression
// var result = (function computeFactorial(number)
// {
//     if(number <= 1)
//     {
//         return 1
//     }
//     return number * computeFactorial(number - 1);
// })(5);

// document.write(result);


//local and global variable in javascript
// function Test3()
// {
//     var demo1 = "Hello";
//     demo = demo + " test";
//     document.write(demo);
// }
// Test3();
// document.write(demo);//local variable avilabel
//global variable
// var demo1 = "Hello";
// function Test3()
// {
    
//     demo = demo + " test";
//     document.write(demo);
// }
// Test3();
// document.write("<br>");
// document.write(demo);
//this is the example for local variale i am aces in globally
// var demo1 = "Hello";
// function Test3()
// {
//      demo1 = "Hello";
//     document.write(demo);
// }
// Test3();
// document.write("<br>");
// document.write(demo);

//closer
function addNumber(firstNumber, secondNumber)
{
    var returnValue = "result is :";
    function add()
    {
        var a = 10;
        // return returnValue + (firstNumber + secondNumber);
       
    }
    
    add();
    document.write(a);
}
var result = addNumber (10, 50);
// document.write(result);


// function addNumber(firstNumber, secondNumber)
// {
//     var returnValue = "result is :";
//     function add();
//     {
//         return returnValue + (firstNumber + secondNumber);
//     }
//     return add;
// }
// var myTest = addNumber (10, 50);//var myTest = addNumber (10, 50)();
// var result = myTest();
// document.write(result);

function Test(name){
	console.log('hello'+name);
}
Test("test");