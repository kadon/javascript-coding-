//Some people say that Javascrip move (internally) all declarations at the top of the file, like this

//var a = 'Hello!';
//function b(){
//  console.log('Called b!');
//}

//b();
//console.log(a);

//but that's not true, because 'a' was printed as undefined
b();
console.log(a);

var a = 'Hello!';
function b(){
  console.log('Called b!');
}

