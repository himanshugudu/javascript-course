var prop = 10;
console.log(this);

function test(a, b) {
    console.log(this);
    console.log(this.prop);
    console.log(a, b);
};

window.test(10, 30);

var obj = {
    prop: 20
};

// call
test.call(obj, 10, 30);

// if you have to run in the window context you can follow the following ways.
test.call(window, 10, 30)
    // OR
test(10, 30)

// apply
test.apply({
    prop: 40
}, [10, 20]);

// what if we have something like this
var test2 = test;

var module = {
    name: 'abc',
    getName: function() {
        console.log(this.name);
    }
}

module.getName(); // what will be the output
module.getName.call({ name: 'def' }); // with some other context

var getName1 = module.getName.bind(module); // this line is same as module.getName()
var getName2 = module.getName.bind({ name: 'def' });

getName1(); // output of line 31 and 37 is the same. as the context is the same
getName2();
