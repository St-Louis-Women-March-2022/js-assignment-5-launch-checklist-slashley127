// Write your JavaScript code here!

window.addEventListener("load", function() {

   let form = document.getElementById("launchForm");
   let pilotName = document.getElementById("pilotName");
   let copilotName = document.querySelector("input[name=copilotName");
   let fuelLevel = document.querySelector("input[name=fuelLevel");
   let cargoMass = document.querySelector("input[name=cargoMass");


   form.addEventListener("submit", (event) => {
    if (form.value === "" || pilotName.value === "" || copilotName.value === "" || fuelLevel === "" || cargoMass === ""){
        console.log("test?");
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