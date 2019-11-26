console.log('Script started');
// const btn__clear = document.querySelector('#btn__clear'); // if u don't like getElementById, this is the same function!
const inputMin = document.querySelector('#minInput');
const inputMax = document.querySelector('#maxInput');
const inputFizz = document.querySelector('#fizzInput');
const inputBuzz = document.querySelector('#buzzInput');
const main = document.querySelector('#container');
const btn__clear = document.querySelector('#btn__clear');
const btn__refresh = document.querySelector('#btn__refresh');

// Starting value on refresh
inputMin.value = 1;
inputFizz.value = 3;
inputBuzz.value = 5;
inputMax.value = 100;

// Creating function that will generate 100 divs.
const create = function () {
	while (main.firstChild) {
		main.removeChild(main.firstChild);
	};

// This line creates 100 divs and hides all that do not match input values.
for (let i = 1; i <= 100; i++) {
	let newDiv = document.createElement("div");
	let newPar = document.createElement("p");
	newDiv.appendChild(newPar);
	main.appendChild(newDiv).setAttribute("id", "div_" + i);    // Gives "id" to every div
	if (i < inputMin.value || i > inputMax.value) {
		newDiv.style = "display: none";
	} else {
		if (i % 3 === 0 && i % 5 === 0) {
			newPar.appendChild(document.createTextNode(i + ' = FIZZ BUZZ'));
		main.appendChild(newDiv).setAttribute("class", "fizbuz");// This adds class to divs
	} else if (i % 3 === 0) {
		newPar.appendChild(document.createTextNode(i + ' = FIZZ'));
		main.appendChild(newDiv).setAttribute("class", "fiz");// This adds class to divs
	} else if (i % 5 === 0) {
		newPar.appendChild(document.createTextNode(i + ' = BUZZ'));
		main.appendChild(newDiv).setAttribute("class", "buz");// This adds class to divs
	} else {
		newPar.appendChild(document.createTextNode(i));
		main.appendChild(newDiv).setAttribute("class", "num");// This adds class to divs
	}
}
}
};    

create();

//This adds event to first INPUT - sets min value.

inputMin.onkeyup = function (e) {
	this.value = inputMin.value.replace(/^(0*)/, "");
	if (inputMin.value >= 1 && inputMin.value <= 100) {
		this.value = inputMin.value;
	} else if (inputMin.value.length === 0) {
		inputMin.value = null;
	} else {
		inputMin.value = null;
		alert("Incorrect number. Please add a valid number from 1 till 100");
	}
	if (!((e.keyCode > 95 && e.keyCode < 106)
		|| (e.keyCode > 47 && e.keyCode < 58)
		|| [8, 13, 37, 39].indexOf(e.keyCode) >= 0
		)) {
		return false;
}
create();
};

// This adds event to second INPUT - sets max value.

inputMax.onkeyup = function (e) {
	this.value = inputMax.value.replace(/^(0*)/, "");
	if (inputMax.value >= 1 && inputMax.value <= 100) {
		this.value = inputMax.value;
	} else if (inputMax.value.length === 0) {
		inputMax.value = null;
	} else {
		inputMax.value = null;
		alert("Sorry! Incorrect number. Please add a valid number from 1 - 100");
	}
	if (!((e.keyCode > 95 && e.keyCode < 106)
		|| (e.keyCode > 47 && e.keyCode < 58)
		|| [8, 13, 37, 39].indexOf(e.keyCode) >= 0
		)) {
		return false;
}
create();
};

// Button action

btn__clear.onclick = function() {
	inputMin.value = "";
	inputMax.value = "";
	create();
};

btn__refresh.onclick = function() {
	inputMin.value = 1;
	inputMax.value = 100;
	create();
};

// JQuery. Selecting divs to class //
$(document).ready(function() {
	$("#btn__fizz").click(function() {
		$(".num, .buz, .fizbuz").toggle();
	});
});

$(document).ready(function() {
	$("#btn__buzz").click(function() {
		$(".num, .fiz, .fizbuz").toggle();
	});
});

$(document).ready(function() {
	$("#btn__fizzbuzz").click(function() {
		$(".num, .buz, .fiz").toggle();
	});
});