// Write your JavaScript code here!

const { formSubmission, validateInput }  = require("./scriptHelper.js");


window.addEventListener("load", function() {
    
    let form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass) {
            if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
                alert("All fields are required!");
                event.preventDefault();
            } else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number") {
                alert("Please enter a name!");
                event.preventDefault();
            } else if (validateInput(fuelLevel) === "Not a Number" || validateInput(cargoMass) === "Not a Number") {
                alert("Please enter a numerical value!");
                event.preventDefault();
            }
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