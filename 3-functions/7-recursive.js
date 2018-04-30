// fibonacci series :- 0 1 1 2 3 5 8 13 21 ........

(function () {
    function printFibonacci(num) {
        var operand1 = 0;
        var operand2 = 1;
        console.log(operand1);
        console.log(operand2);
        var sum = operand1 + operand2;
        while (sum < num) {
            console.log(sum);
            operand1 = operand2;
            operand2 = sum;
            sum = operand1 + operand2;
        }
    }

    // printFibonacci(100);

    var fibboRecursive = function (n) {
        if (n === 1) {
            return [0, 1];
        } else {
            var s = fibboRecursive(n - 1);
            s.push(s[s.length - 1] + s[s.length - 2]);
            return s;
        }
    };
    console.log(fibboRecursive(10));

    // recursive example

    function print(num) {
        if (num > 10) {
            return null;
        } else {
            console.log(num);
            print(num + 1);
        }
    }
    // print(1);

    function print2(num) {
        for (var i = 1; i <= num; i++) {
            console.log(i);
        }
    }
    // print2(10);
})();