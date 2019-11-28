console.log('My script started');

// Start values

startValue.value = 1;
endValue.value = 100;
fizzValue.value = 3;
buzzValue.value = 5;

function innit () {
    addListeners();
    document.getElementById('elements');

    const clearButton = document.getElementById('reset');
    clearButton.addEventListener("click", onClickReset);
    const submitCustom = document.getElementById('generate__custom');
    submitCustom.addEventListener("click", onClickCustom);
    const submit = document.getElementById('generate');
    submit.addEventListener("click", onClick);

    clearButton.onclick = function() {
        startValue.value = 1;
        endValue.value = 100;
        fizzValue.value = 3;
        buzzValue.value = 5;
        innit();
        console.log('All Clear');
    }
    
    submit.onclick = function() {
        startValue.value = 1;
        endValue.value = 100;
        fizzValue.value = 3;
        buzzValue.value = 5;
        innit();
        console.log('Generated');
    }
};


// Reload page on icon click

function refreshPage(){
    window.location.reload();
}

// For alerts

// startValue.onkeyup = function (e) {
//         this.value = startValue.value.replace(/^(0*)/, "");
//         if (startValue.value >= 1 && startValue.value <= 101) {
//             this.value = startValue.value;
//         } else if (startValue.value.length === 0) {
//             startValue.value = null;
//         } else {
//             startValue.value = null;
//             alert("Please add avalid number! From 1 - 100!");
//         }
//         innit();
//     };

//     endValue.onkeyup = function (e) {
//         this.value = endValue.value.replace(/^(0*)/, "");
//         if (endValue.value >= 1 && endValue.value <= 101) {
//             this.value = endValue.value;
//         } else if (endValue.value.length === 0) {
//             endValue.value = null;
//         } else {
//             endValue.value = null;
//             alert("Please add avalid number! From 1 - 100!");
//         }
//         innit();
// };

function onClick() {
    onClickReset();
    for(let i = 1; i < 101; i++) {
        let element = document.createElement('div');
        element.className="element" + i;
        elements.appendChild(element);
        if (i % 3 === 0 && i % 5 === 0){
            element.setAttribute("id", "element" +i);
            element.setAttribute("class", "fizzbuzz");
            element.innerText = "FizzBuzz " + i;
        }

        else if (i % 3 === 0 && i % 5 !== 0) {
            element.setAttribute("id", "element" +i);
            element.setAttribute("class", "fizz");
            element.innerText = "Fizz " + i;
        }

        else if (i % 5 === 0 && i % 3 !== 0){
            element.setAttribute("id", "element" +i);
            element.setAttribute("class", "buzz");
            element.innerText = "Buzz " + i;
        }

        else if (i % 3 !== 0 && i % 5 !== 0){
            element.setAttribute("id", "element" +i);
            element.setAttribute("class", "empty");
            element.innerText = i;
        }
    }
};

function onClickReset () {
    while (elements.firstChild) {
        elements.removeChild(elements.firstChild);
    }
};

function onClickCustom (){
    onClickReset();
    let startValue = document.getElementById('startValue').value;
    let endValue = document.getElementById('endValue').value;   
    let fizzValue = document.getElementById('fizzValue').value;
    let buzzValue = document.getElementById('buzzValue').value;
    console.log('start value - ' + startValue);
    console.log('end value - ' + endValue);
    console.log('fizz value - ' + fizzValue);
    console.log('buzz value - ' + buzzValue);

    for (startValue; startValue <= endValue; startValue++){
        let element = document.createElement('div');
        element.id = "element" + startValue;
        elements.appendChild(element);
        if (startValue % fizzValue === 0 && startValue % buzzValue === 0){
            element.setAttribute("id", "element" + startValue);
            element.setAttribute("class", "fizzbuzz");
            element.innerText = "FizzBuzz " + startValue;
        }

        else if (startValue % fizzValue === 0 && startValue % buzzValue !== 0){
            element.setAttribute("id", "element" + startValue);
            element.setAttribute("class", "fizz");
            element.innerText = "Fizz " + startValue;
        }

        else if (startValue % buzzValue === 0 && startValue % fizzValue !== 0){
            element.setAttribute("id", "element" + startValue);
            element.setAttribute("class", "buzz");
            element.innerText = "Buzz " + startValue;
        }

        else if (startValue % fizzValue !== 0 && startValue % buzzValue !== 0){
            element.setAttribute("id", "element" + startValue);
            element.setAttribute("class", "empty");
            element.innerText = startValue;
        }
    }
}

function addListeners() {
    const submit = document.getElementById('generate');
    submit.onclick = onClick;
}

innit();