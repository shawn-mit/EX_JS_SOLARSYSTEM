/*
 Use the forEach method to add the name of each planet
 to a div element in your HTML with an id of "planets".
*/

var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];


planets.forEach(function(element) {
	
	//element = document.getElementById("planet").innerHTML;
	document.getElementById("planet").innerHTML = planets 
});




// Use the filter method to create a new array that contains planets with the letter 'e'

var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];

function onlyPlanetE (planets) {
 if (planets.includes("e")) {
	return planets
	}
};

var newPlanets = [];
newPlanets = planets.filter(onlyPlanetE);


document.getElementById("newPlanets").innerHTML = newPlanets

			//arr.includes(searchElement)
			//var new_array = arr.filter(callback[, thisArg])



// Use the reduce method to create a sentence from the words in the following array
//arr.reduce(callback[, initialValue])

var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];


function stringWords (previous, current) {
	
	return previous +" "+ current;
};

var reducedSentence = words.reduce(stringWords);

document.getElementById("reduceplanets").innerHTML = reducedSentence





// Use the map method to create a new array where the first letter of each planet is capitalized


// newArr[i] = newArr[i].charAt(0).toUpperCase() + newArr[i].substr(1);

//var new_array = arr.map(callback[, thisArg])

	var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];

	var capitalPlanets = planets.map(mapFunc);




	function mapFunc ( newPlanets) {

		var newPlanets = [];

		for (i = 0; i < planets.length ; i ++) {

			newPlanets.push(planets[i].charAt(0).toUpperCase());			
		}
	};


console.log ("capitalPlanets", capitalPlanets);
