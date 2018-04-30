// iife vs closures
// (function (){
//     console.log('func 1');

//     test();

//     function test(){
//         console.log('test');
//     }
// })();

// writing something to console and html
// 

// Understanding local and global - start
y = 123;

function test() {
    var x = 234;
    console.log(x);
}
test();
// Understanding local and global - end