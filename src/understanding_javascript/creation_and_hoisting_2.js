// But why this code still works, even though 'a' is printed as 'undefined' 
b();
console.log(a);

var a = 'Hello!';
function b(){
  console.log('Called b!');
}

//Many languages programming read the code line by line so this code will fail in those languages
//but not in Javascrip ;/ "strange"


