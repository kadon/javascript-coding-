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


//  Execution context is created in two Phases:
//    1) Creation phase (creation of Global Object (when it's global execution context), this and Outer environment)
//       then it setup Memory Space for variables and functions "Hoisting", for variables they are set equal to undefined,
//       Before the code is executed line by line variable an functions exits in memory, so when the code is being executed
//       line by line it can access them.
//
//    2) ... later on

// Javascript and undefined
//
//  javascript_and_undefined.js
