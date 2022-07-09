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


function checkInput(){
  let form = document.getElementById("launchForm");
  form.addEventListener("submit", (event) => {
    let pilotName = document.getElementById("pilotName");
    let copilotName = document.querySelector("input[name=copilotName");
    let fuelLevel = document.querySelector("input[name=fuelLevel");
    let cargoMass = document.querySelector("input[name=cargoMass");
    if(pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === ""){
      alert("All Fields Required!");
      };
    event.preventDefault();
  });
};


  

function validateInput(testInput) {
  for (let i = 0; i<testInput.length; i++){
    if(isNaN(testInput)){
      return ("Not a Number")
    }
    if(typeof(testInput) === Number){
      return ("Is a Number")
    }
    if(testInput === ""){
      return("Empty")
    };
  }; 
};

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   
}

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
module.exports.checkInput = checkInput;

// module.exports = {
//   checkInput: checkInput,                                                                                                                  b
//   addDestinationInfo: addDestinationInfo,
//   validateInput: validateInput,
//   formSubmission: formSubmission,
//   pickPlanet: pickPlanet,
//   myFetch: myFetch,
// };
