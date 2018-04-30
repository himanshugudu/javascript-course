// 1. there are two scopes
//     a. inside a function
//     b. outside a function
// 2. parent scope cannot access the child scope.
// 3. child scope can access the parent scope
var global = 'abc';
function a() {
    var global1 = 'def';

    function b() {
        var global2 = 'ghi';
        console.log(global1);
        console.log(global);
    }
    b();
}
// a();
// window.a();

