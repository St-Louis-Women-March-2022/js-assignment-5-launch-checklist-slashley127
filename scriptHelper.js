const { implForWrapper } = require('jsdom/lib/jsdom/living/generated/utils');

// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
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
}


// function checkForEmpty(){
//   let form = document.getElementById("launchForm");
//   form.addEventListener("submit", (event) => {
//     let pilotName = document.getElementById("pilotName");
//     let copilotName = document.querySelector("input[name=copilotName");
//     let fuelLevel = document.querySelector("input[name=fuelLevel");
//     let cargoMass = document.querySelector("input[name=cargoMass");
//     if(pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === ""){
//       alert("All Fields Required!");
//       };
//     event.preventDefault();
//   });
// };
  

function validateInput(testInput) {
  const form = document.getElementById("launchForm")
  form.addEventListener("submit", (event) => {
    let pilotName = document.getElementById("pilotName").value;
    let copilotName = document.querySelector("input[name=copilotName").value;
    let fuelLevel = document.querySelector("input[name=fuelLevel").value;
    let cargoMass = document.querySelector("input[name=cargoMass").value;
    let inputValues = [pilotName, copilotName, fuelLevel, cargoMass]

    if (!pilotName || !copilotName || !fuelLevel || !CargoMass){
      alert("All fields required!")
      return "Empty"
    }
    if (typeof(pilotName)===Number || typeof(copilotName)===Number){
      alert("Pilot name and copilot name cannot include numbers")
    }

  });
    
};

//when we call formSubmission we will call with parameters pilotName.value, copilotName.value, etc
function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

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
module.exports.checkForEmpty = checkForEmpty;

// module.exports = {
//   checkInput: checkInput,                                                                                                                  b
//   addDestinationInfo: addDestinationInfo,
//   validateInput: validateInput,
//   formSubmission: formSubmission,
//   pickPlanet: pickPlanet,
//   myFetch: myFetch,
// };
