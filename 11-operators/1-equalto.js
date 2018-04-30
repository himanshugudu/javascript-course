var var1 = 'Marathahalli';
var var2 = 123;
var var3 = true;
var var4 = {};
var var5;
var var6 = null;
var var7 = NaN;
var var8 = [];
var var9 = function () {};

// toNumber(), toBoolean() - implicit method which js uses in == comparison

console.log('\n-------------\nstring comparison with string\n-------------------');
if (false == false) {
    console.log('false == false');
}

if ({} == {}) {
    console.log('{} == {}');
}

var obj1 = {
    a: 1
};
var obj2 = {
    a: 1
};

if (obj1 != obj2) {
    console.log('obj1 != obj2');
}

if ([] != []) {
    console.log('[] != []');
}

if ([]) {
    console.log('[] is true');
}

if (null != null) {
    console.log('null != null');
} else {
    console.log('null == null');
}

if (NaN != NaN) {
    console.log('NaN != NaN');
} else {
    console.log('NaN == NaN');
}

if (undefined != undefined) {
    console.log('undefined != undefined');
} else {
    console.log('undefined == undefined');
}
