// Write your JavaScript code here!

const { validateInput } = require("./scriptHelper");

//const { validateInput } = require("./scriptHelper");

window.addEventListener("load", function() {

   let form = document.getElementById("launchForm");
   let pilotName = document.getElementById("pilotName");
   let copilotName = document.querySelector("input[name=copilotName");
   let fuelLevel = document.querySelector("input[name=fuelLevel");
   let cargoMass = document.querySelector("input[name=cargoMass");


   form.addEventListener("submit", (event) => {
    let inputs = [pilotName.value, copilotName.value, fuelLevel.value, cargoMass.value]
    let validatedResults = []
    let validatedItem = ""
    for(let i=0; i<inputs.length; i++){
        let validatedItem = validateInput(inputs[i]);
        validatedResults.push(validatedItem);

    }


    let returnValue = validateInput(pilot.value)
    if(returnValue === 'Empty'){
        alert("All fields required!")
    }
    if()
    
        event.preventDefault();
    }
    
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
   })



});