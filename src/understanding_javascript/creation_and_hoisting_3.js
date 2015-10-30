// And why this faild? "Uncaught ReferenceError: a is not defined"
b();
console.log(a);

function b(){
  console.log('Called b!');
}

