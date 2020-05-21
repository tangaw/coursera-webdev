// Event listening
document.addEventListener("DOMContentLoaded",
  function (event) {

    // Unobtrusive event binding
    document.querySelector("button").addEventListener("click", function () {

      // Call server to get the name
      $ajaxUtils.sendGetRequest("/data/name.json", function(res) {
        let message = res.firstName + " " + res.lastName;
        if (res.stateOfMind === "happy") {
          message += " is happy, ";
        }
        else {
          message += " is not happy, ";
        }
        message += "and uses " + res.numberOfPots + " pots!"
        
        // Need to put inside response function since it is asynchronous or else name will be empty
        // Callback function
        document.querySelector("#content")
                .innerHTML = "<h2>" + message;
      });

      
    })
  })