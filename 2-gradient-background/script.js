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

function setSelectedColors() {
	setGradient(selectedColor1.value, selectedColor2.value);
}

function getRandomColor() {
	var color = '#' + Math.random().toString(16).slice(2, 8).toUpperCase();
	return color;
}

function setRandomColors() {
	setGradient(getRandomColor(), getRandomColor());
}

selectedColor1.addEventListener("input", setSelectedColors);

selectedColor2.addEventListener("input", setSelectedColors);

randomButton.addEventListener("click", setRandomColors);
