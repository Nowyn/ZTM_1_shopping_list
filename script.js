var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var deleteButton = document.getElementsByClassName("delete");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value+' '));
	var button = document.createElement("button");
	button.innerHTML = "Delete";
	button.setAttribute('class', 'delete');
	li.appendChild(button);	
	ul.appendChild(li);
	input.value = "";

	button.onclick = deleteTask;
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function toggleDone(e){
	if(e.target && e.target.nodeName == "LI") {
		e.target.classList.toggle('done');
	}
}

function deleteTask(e) {
	var del = e.target.parentNode.remove();
}

function removeListItem() {
	var buttons = deleteButton.length;
	for (var i = 0; i < buttons; i++) {
		deleteButton[i].addEventListener("click", deleteTask);

	}
}

ul.addEventListener("click", toggleDone);

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

removeListItem();
