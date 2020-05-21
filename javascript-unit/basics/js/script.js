// let message = "in global";
// console.log("Global message:", message);

function a () {
  var message = "inside a";
  console.log("a message:", message);
  b();
}

function b () {
  console.log("b message:", message);
}

console.log(message) // message is still undefined