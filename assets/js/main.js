console.log('My script started');

//start values
startValue.value = 1;
endValue.value = 100;
fizzValue.value = 3;
buzzValue.value = 5;

function innit () {
  //  console.log('Adding listeners')
  addListeners();
  document.getElementById('elements');

  var clearButton = document.getElementById('clear');
  clearButton.addEventListener("click", onClickClear);
  var submitCustom = document.getElementById('generate2');
  submitCustom.addEventListener("click", onClickCustom);
}

function onClick() {
    onClickClear();
    console.log('Button press');
    for(let i = 1; i<101; i++){
        const element = document.createElement('div');
        element.className="element" + i;
        elements.appendChild(element);
        if (i % 3 ===0 && i % 5 === 0){
            element.setAttribute("id", "element" +i);
            element.setAttribute("class", "fizzBuzz");
            element.innerText="FizzBuzz " + i;
        }
        
        else if (i % 3 === 0 && i % 5 !== 0) {
            element.setAttribute("id", "element" +i);
            element.setAttribute("class", "fizz");
            element.innerText="Fizz " + i;
        }

        else if (i % 5 === 0 && i % 3 !== 0){
            element.setAttribute("id", "element" +i);
            element.setAttribute("class", "buzz");
            element.innerText="Buzz " + i;
        }

        else if (i % 3 !== 0 && i % 5 !== 0){
            element.setAttribute("id", "element" +i);
            element.setAttribute("class", "empty");
            element.innerText=i;
        }
    }
}

function onClickClear () {
    while (elements.firstChild) {
        elements.removeChild(elements.firstChild);
    }
    console.log('Divs cleared');
}

function onClickCustom (){
    onClickClear();
    console.log('Divs cleared');
    console.log('Generate custom divs');
    var startValue = document.getElementById('startValue').value;
    var endValue = document.getElementById('endValue').value;   
    var fizzValue = document.getElementById('fizzValue').value;
    var buzzValue = document.getElementById('buzzValue').value;
    // var fizzColor = document.getElementById('fizzColor').value;
    // var buzzColor = document.getElementById('buzzColor').value;
    // var fizzBuzzColor = document.getElementById('fizzBuzzColor').value;
    // var noneColor = document.getElementById('noneColor').value;
    
    console.log('start value - ' + startValue);
    console.log('end value - ' + endValue);
    console.log('fizz value - ' + fizzValue);
    console.log('buzz value - ' + buzzValue);
    // console.log('fizz color - ' + fizzColor);
    // console.log('buzz color - ' + buzzColor);
    // console.log('fizzbuzz color - ' + fizzBuzzColor);
    // console.log('none color - ' + noneColor);
    
    for (startValue; startValue<=endValue; startValue++){
        const element = document.createElement('div');
        element.id="element" + startValue;
        elements.appendChild(element);

        if (startValue % fizzValue === 0 && startValue % buzzValue === 0){
            element.setAttribute("id", "element" +startValue);
            element.setAttribute("class", "fizzBuzz");
            element.innerText="FizzBuzz " + startValue;
            // element.style.backgroundColor=fizzBuzzColor;
        }

        else if (startValue % fizzValue === 0 && startValue % buzzValue !== 0){
            element.setAttribute("id", "element" +startValue);
            element.setAttribute("class", "fizz");
            element.innerText="Fizz " + startValue;
        }

        else if (startValue % buzzValue === 0 && startValue % fizzValue !== 0){
            element.setAttribute("id", "element" +startValue);
            element.setAttribute("class", "buzz");
            element.innerText="Buzz " + startValue;
        }

        else if (startValue % fizzValue !== 0 && startValue % buzzValue !== 0){
            element.setAttribute("id", "element" +startValue);
            element.setAttribute("class", "empty");
            element.innerText=startValue;
        }
    }
}

function addListeners() {
    const submit = document.getElementById('generate');
    submit.onclick = onClick;
}

innit();