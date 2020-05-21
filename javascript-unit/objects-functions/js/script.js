/*** OBJECTS ***/
// Declare using new Object()
let company = new Object();
company.name = "Facebook";
company.ceo = new Object();
company.ceo.firstName = "Mark";
company.ceo.favColor =  "blue";
company["stock price"] = 110;

/*
console.log(company);
console.log("Company CEO name is: " + company.ceo.firstName);
console.log(company["name"]); // Alternative method of accessing Objects
console.log(company["stock price"])
*/

// Better way: Object literal
let facebook = {
  name: "Facebook",
  ceo: {
    firstName: "Mark",
    favColor: "blue"
  },
  "stock of company": 110
};

/*
console.log(facebook);
console.log(facebook.ceo.firstName);
*/


/*** FUNCTIONS ***/
// Functions are a first-class data type
// Functions ARE objects in Javascript
function multiply(x, y) {
  return x * y;
}
multiply.version = "v1.1.1";

/*
console.log(multiply(5, 3));
console.log(multiply); // Defaults to calling toString()
console.log(multiply.version);
*/

// Function factory
function makeMultiplier(multiplier) {
  let myFunc = function(x) {
    return multiplier * x;
  };
  return myFunc;
};
let multiplyBy3 = makeMultiplier(3);
// console.log(multiplyBy3(10));

// Passing functions as arguments
function doOperationOn(x, operation) {
  return operation(x);
};
let result = doOperationOn(5, multiplyBy3);
// console.log(result);


/*** Copy by REFERENCE v. by VALUE ***/
// By VALUE
let a = 7;
let b = a;
/*
console.log("a is:", a);
console.log("b is", b);
*/

b = 5;
/*
console.log("After b update: ");
console.log("a is:", a);
console.log("b is", b);
*/
// By REFERENCE
let c = {x: 7};
let d = c;
/*
console.log(c);
console.log(d);
*/
d.x = 5;
/*
console.log("After d.x update: ");
console.log(c);
console.log(d);
*/

/*** Pass by REFERENCE v. by VALUE ***/
/*
function changePrimitive(primValue) {
  console.log("inside changePrimitive");
  console.log("before:");
  console.log(primValue);

  primValue = 5;
  console.log("after:")
  console.log(primValue);
};
let value = 7;
changePrimitive(value); // Behind the hood: primValue = value
console.log("After changePrimitive, orig value:", value);
*/


/*** Function constructors (Class) ***/
function Circle(radius) {
  this.radius = radius;

}; /* Function constructor cannot have a return value */

/* Setting a prototype (will only be created ONCE) */
Circle.prototype.getArea = function() {
  return Math.PI * Math.pow(this.radius, 2);
  // Do not use an arrow function in this instance
};

let myCircle = new Circle(10); // 'new' keyword will make 'this' point to Circle
// console.log(myCircle);
// console.log(myCircle.getArea());

let myOtherCircle = new Circle(20);
// console.log(myOtherCircle);


/*** Object literals and "this" ***/
function test() {
  console.log(this);
  this.myName = "Aaron"; // Assigning to the global 'window' object
};
// test();
// console.log(window.myName);

let literalObject = {
  radius: 10,

  getArea: function() {
    console.log(this);
    return Math.PI * Math.pow(this.radius, 2);
  }
};

literalObject.getArea();
console.log(literalObject.getArea());