// Write your JavaScript code here!

//const { validateInput } = require("./scriptHelper");


window.addEventListener("load", function() {

   let form = document.getElementById("launchForm");
   let pilotName = document.getElementById("pilotName");
   let copilotName = document.querySelector("input[name=copilotName");
   let fuelLevel = document.querySelector("input[name=fuelLevel");
   let cargoMass = document.querySelector("input[name=cargoMass");
   let userInput = []
   

   
   form.addEventListener("submit", (event) => {
    userInput.push(pilotName.value);
    userInput.push(copilotName.value);
    
    console.log(userInput)
    
        event.preventDefault();
    });
    
   



   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse;
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   });

});

