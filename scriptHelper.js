const { ConsoleReporter } = require('jasmine');
const { implForWrapper } = require('jsdom/lib/jsdom/living/generated/utils');

// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
  document.getElementById("missionTarget").innerHTML = `
  <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name} </li>
                    <li>Diameter: ${diameter} </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance} </li>
                    <li>Number of Moons: ${moons} </li>
                </ol>
                <img src="${imageUrl}">`


   // Here is the HTML formatting for our mission target div.
   /*
                
   */
 }
  

function validateInput(testInput) {
    if (testInput === ""){
      return "Empty"
    }
    if (isNaN(testInput)){
      return "Not a number."
    }
    if (!isNaN(testInput)){
      return "Is a number."
    }  
};



function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
  const form = document.getElementById("launchForm")
  pilotValue = validateInput(pilot);
  copilotValue = validateInput(copilot);
  fuelLevelValue = validateInput(fuelLevel);
  cargoLevelValue = validateInput(cargoLevel);
  list = document.getElementById("faultyItems");

  if(pilotValue === "Empty" || copilotValue === "Empty" || fuelLevelValue === "Empty" || cargoLevelValue === "Empty"){
    list.style.visibility = "hidden"
    alert("All fields required");
  }

  if(pilotValue === "Is a number." || copilotValue === "Is a number."){
    list.style.visibility = "hidden"
    alert("Pilot and Copilot names cannot be numbers")
  } else {
    list.style.visibility = "visible"
    document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot} Ready`
    document.getElementById("copilotStatus").innerHTML = `Co-Pilot ${copilot} Ready`
  };

  if(fuelLevelValue === "Not a number." || cargoLevelValue === "Not a number."){
    list.style.visibility = "hidden"
    alert("Fuel Level and Cargo Mass must be numbers");
  }else if(fuelLevel<10000){
    list.style.visibility = "visible"
    document.getElementById("fuelStatus").innerHTML = 'Fuel level is TOO LOW for launch!'
    document.getElementById("launchStatus").innerHTML = 'Shuttle not ready for launch'
    document.getElementById("launchStatus").style.color = "red"
  }else{
    list.style.visibility = "visible"
    document.getElementById("launchStatus").innerHTML = "Shuttle is ready for launch"
    document.getElementById("launchStatus").style.color = "green"
  }

  if(cargoLevel>10000){
    list.style.visibility = "visibile"
    document.getElementById("cargoStatus").innerHTML = 'Cargo mass is TOO LARGE for launch!'
    document.getElementById("launchStatus").innerHTML = 'Shuttle not ready for launch'
    document.getElementById("launchStatus").style.color = "red"
  } else {
    list.style.visibility = "visible"
    document.getElementById("launchStatus").innerHTML = "Shuttle is ready for launch"
    document.getElementById("launchStatus").style.color = "green"
  }
      
};
  

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
      return response.json()
     });

    return planetsReturned;
}

function pickPlanet(planets) {
  index = Math.floor(Math.random()*6)
  return planets[index]
}


module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;

