/*** DOM manipulation ***/

item = document.getElementById("title");
console.log(item);
console.log(document instanceof HTMLDocument);

/*** Event handling ***/
// Waiting for all DOM content to load before activation
// Allows the .js file to be placed at the top
document.addEventListener("DOMContentLoaded", 
  function() {

    function sayHello(event) {
      console.log(event);
      
      this.textContent = "Said it!";
      let name = document.getElementById("name").value; 
      // .value to access input value
      let message = "Hello " + name;
      let message2 = "<h2>Hello " + name + "!</h2>";
    
      // document.getElementById("content").textContent = message;
      // write out a new textContent
      document.getElementById("content").innerHTML = message2;
      // write out a new innerHTML to also change to an h2
    
      if (name === "student") {
        let title = document.querySelector("h1").textContent; 
        // Selecting h1 only returns first matching element
        // Assign textContent property of element to a variable
        title += " & Lovin' it!"
        document.querySelector("#title").textContent = title;
        // Assign new title back to the textContent
      }
    };
    
    
    /*** Unobtrusive event binding ***/
    document.querySelector("button").addEventListener("click", sayHello);
    // On top of handling events, will also make "this" point to the "button" instead of the "window"

    document.querySelector("body").addEventListener("mousemove", 
      function(event) {
        if (event.shiftKey === true) {
          console.log("x: " + event.clientX);
          console.log("y: " + event.clientY);
        }
      });
  });


// Alternative solution below
// document.querySelector("button").onclick = sayHello;