// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   const div = document.getElementById("missionTarget");
   div.innerHTML = `
   <h2>Mission Destination</h2>
   <ol>
       <li>Name: ${name}</li>
       <li>Diameter: ${diameter}</li>
       <li>Star: ${star}</li>
       <li>Distance from Earth: ${distance}</li>
       <li>Number of Moons: ${moons}</li>
   </ol>
   <img src="${imageUrl}">
   `;
   
}

function validateInput(testInput) {
      if (testInput === ""){
        return "Empty";
    } else if (!isNaN(testInput)){
        return "Is a Number";
    } else if (isNaN(testInput)){
        return "Not a Number";
    }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass) {
    //reference html li statuses

    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoMass) === "Empty") {
        window.alert("All fields are required!");
    } else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number") {
        window.alert("Please enter a name for Pilot and/or Co-Pilot!");
    } else if (validateInput(fuelLevel) === "Not a Number" || validateInput(cargoMass) === "Not a Number") {
        window.alert("Please enter a numerical value for Fuel Level and/or Cargo Mass!");
    } else {

    

    let pilotTarget = document.getElementById("pilotStatus");
    let copilotTarget = document.getElementById("copilotStatus");
    let fuelTarget = document.getElementById("fuelStatus");
    let cargoTarget = document.getElementById("cargoStatus");
    
    list.style.visibility = "visible";
    //update shuttle requirements here// if checks for status variables
    pilotTarget.innerHTML = `Pilot ${pilot} Ready`;
    copilotTarget.innerHTML = `Co-pilot ${copilot} Ready`;
    

    if (fuelLevel < 10000) {
        fuelStatus.innerHTML = `Not enough fuel`;
        launchStatus.innerHTML = "Shuttle not ready for launch";
        launchStatus.style.color = "red";
    } else {
        fuelStatus.innerHTML = `Fuel level high enough for launch`;
        launchStatus.innerHTML = `Shuttle ready for launch`;
        launchStatus.style.color = "green";
    }


    if (cargoMass > 10000) {
        cargoStatus.innerHTML = `Too much mass for the shuttle to take off`;
        launchStatus.innerHTML = "Shuttle not ready for launch";
        launchStatus.style.color = "red";
    } else {
        cargoStatus.innerHTML = `Cargo mass low enough for launch`;
        launchStatus.innerHTML = `Shuttle ready for launch`;
        launchStatus.style.color = "green";
    }
 }     
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json()
     });
    return planetsReturned;
}

function pickPlanet(planets) {
    //hardcoded planet//
    let randomNum = planets[Math.floor(Math.random()*planets.length)];
    //let planet = planets[0];
    return randomNum;

}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;

