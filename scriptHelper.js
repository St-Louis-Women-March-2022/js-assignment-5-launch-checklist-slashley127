const { ConsoleReporter } = require('jasmine');
const { implForWrapper } = require('jsdom/lib/jsdom/living/generated/utils');

// Write your helper functions here!
require('isomorphic-fetch');

//function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
 //}
  

function validateInput(testInput) {
    if (testInput === ""){
      return "Empty"
    }
    if (testInput === !Number){
      return "Not a number."
    }
    if (testInput === Number){
      return "Is a number."
    }  
};



function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
  const form = document.getElementById("launchForm")
  pilotValue = validateInput(pilot)
  copilotValue = validateInput(copilot)
  if(pilotValue === "Empty" || pilotValue === "Is a Number."){
    alert("OMG STAHP");
  } 
  if(copilotValue === "Empty" || copilo)

    
};
  

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;

