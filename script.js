// Write your JavaScript code here!

window.addEventListener("load", function() {

   let form = document.getElementById("launchForm");
   let pilotName = document.getElementById("pilotName");
   let copilotName = document.getElementsByName("copilotName");
   let 


   form.addEventListener("submit", (event) => {
    console.log("test?");
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
   })



});