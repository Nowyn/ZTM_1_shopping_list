var css = document.querySelector("h3");
var selectedColor1 = document.querySelector(".color1");
var selectedColor2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomButton = document.querySelector(".random");

function setGradient(color1, color2) {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1
	+ ", "
	+ color2
	+ ")";

	css.textContent = body.style.background + ";"
}

function setColors() {
	setGradient(selectedColor1.value, selectedColor2.value);
}

function getRandomColor() {
	var color = '#' + Math.random().toString(16).slice(2, 8).toUpperCase();
	return color;
}

function setRandomGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ getRandomColor()
	+ ", "
	+ getRandomColor()
	+ ")";

	css.textContent = body.style.background + ";"
}

color1.addEventListener("input", setColors);

color2.addEventListener("input", setColors);

randomButton.addEventListener("click", setRandomGradient);
