let num = [1,2,2,3];
console.log(new Set(num))
console.log([...new Set(num)])  //to convert array use spread operator
let func = function(){
	{
		(function(){
			let l = 'let';
			var v = 'var';
		})();
	}
	console.log(l);
	console.log(v);
}	
func();