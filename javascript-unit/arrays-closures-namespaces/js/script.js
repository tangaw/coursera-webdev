// Arrays
let array = new Array();
array[0] = "Aaron";
array[1] = 2;
array[2] = function(name) {
  console.log("Hello", name);
};
array[3] = {
  course: " HTML, CSS, & JavaScript"
};

// console.log(array);
// array[2](array[0]);
// console.log(array[3].course);

/*** Short-hand array creation */
let names = [
  "Aaron",
  "Mary",
  "John"];
// console.log(names);

for (let i=0; i<names.length; i++) {
  // console.log("Hello", names[i]);
}
// Array can be sparse
names[100] = "Joe";
for (let i=0; i<names.length; i++) {
  // console.log("Hello", names[i]);
}

let names2 = ["Aaron", "Mary", "Joe"];

let myObj = {
  name: "Aaron",
  course: "HTML/CSS/JavaScript",
  platform: "Coursera"
};
/*
for (prop in myObj) {
  console.log(prop + ": " + myObj[prop]);
};
*/

/*** Closure ***/
function makeMultiplier(multiplier) {
  return (function (x) {
    return multiplier * x;
  })
}
doubleAll = makeMultiplier(2);
console.log(doubleAll(10));