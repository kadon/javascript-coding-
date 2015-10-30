//  In Javascript object is a collection of name / value pairs

var literalObject = {
  "name": "object",
  "numAttributes" : 4,
  "isLiteral": true,
  "nested": {
    "name": "nested Object",
    "numAttributes": 2
  }
}

function fun(){
}

console.log(this); //TEST CODE IN NODE CONSOLE 

// Always a Global Execution context is created

// Global environment and Global object
// Global = not inside a function 

/////////////////////////////////////////////////////////////
/////             Global Execution context              /////
/////                                                   /////
/////  |||||||||||||||||||         |||||||||||||||||||  /////
/////  |||             |||         |||             |||  /////
/////  |||  Global     |||         ||| Outer       |||  /////
/////  |||   Object    ||| => this |||  Environment|||  /////
/////  |||             |||         |||             |||  /////
/////  |||||||||||||||||||         |||||||||||||||||||  /////
/////                                                   /////
/////////////////////////////////////////////////////////////
/////                                                   /////
/////                      Code                         /////
/////                                                   /////
/////////////////////////////////////////////////////////////



// CREATION AND "HOISTING"

// creation_and_hoisting_1.js
// creation_and_hoisting_2.js
// creation_and_hoisting_3.js


//  Execution context is created in two faces:
//    1) Creation face (creation of Global Object, this and Outer environment) minute 42


