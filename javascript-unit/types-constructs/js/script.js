first_object = {
  firstName: "Aaron",
  lastName: "Tang"
}

let x;
console.log(x);

x = 5;

if (x === undefined) {
  console.log("x is undefined");
}
else {
  console.log("x has been defined");
}

// Basic for loop
let sum = 0;
for (i=0; i<10; i++) {
  sum += i;
}
console.log("Sum through 1 to 9 is: " + sum);

// Handling default values
function orderChickenWith(sideDish) {
  sideDish = sideDish || "whatever";
  console.log("Order chicken with " + sideDish);
}
orderChickenWith();