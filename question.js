let num = [1,2,2,3];

let func = function(){
	{
		let l = 'let';
		var v = 'var';
	}
	console.log(l);
	console.log(v);
}	
func();

console.log(5<6<7);
console.log(7>6>5);

let x = function(){
	return
	{
		message:'hi'
	}
}
console.log(x())

// find no of vowel
function vowel_count(str1)
{
  var vowel_list = 'aeiouAEIOU';
  var vcount = 0;
  
  for(var x = 0; x < str1.length ; x++)
  {
    if (vowel_list.indexOf(str1[x]) !== -1)
    {
      vcount += 1;
    }
  
  }
  return vcount;
}
console.log(vowel_count("Welcome to CodeWOrld"));



function random_item(items)
{
  
return items[Math.floor(Math.random()*items.length)];
     
}

var items = [254, 45, 212, 365, 2543];
