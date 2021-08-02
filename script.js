// Write your JavaScript code here!


window.addEventListener("load", function() {
    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    console.log(listedPlanetsResponse);
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let myPlanet = pickPlanet(listedPlanets);
        addDestinationInfo(document, myPlanet.name, myPlanet.diameter, myPlanet.star, myPlanet.distance, myPlanet.moons, myPlanet.image);
    })

    let form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        let pilotInput = document.querySelector("input[name=pilotName]");
        let pilot = pilotInput.value;
        let copilotInput = document.querySelector("input[name=copilotName]");
        let copilot = copilotInput.value;
        let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
        let fuelLevel = fuelLevelInput.value;
        let cargoLevelInput = document.querySelector("input[name=cargoMass]");
        let cargoLevel = cargoLevelInput.value;
        let list = document.getElementById("faultyItems");
        formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
    });
   
});