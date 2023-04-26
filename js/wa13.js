

function check() {
    console.log('test');
}

function submit() {
    alert("Are You Ok With This Volume: " + outputInt + " ?");
    // alert(output.textContent);
}

function mute() {
    outputInt = randomNumber(0,3);
    output.textContent = outputInt;
    console.log("muteed");
}

function minus() {
    const Rnum = randomNumber(0, 30);
    if ((outputInt - Rnum) > 0) 
    {
        outputInt -= Rnum;
        output.textContent = outputInt; 
    } 
}

function plus() {
    const Rnum = randomNumber(0, 30);
    if ((outputInt + Rnum) < 100) 
    {
        outputInt += Rnum;
        output.textContent = outputInt;
    }
}

// function random() {
//     outputInt = randomNumber(0, 100);
//     output.textContent = outputInt;
// }

function randomNumber(min, max) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
}



const output = document.querySelector('.output');
let outputInt = parseInt(output.textContent);
console.log(outputInt);

const minusButton = document.querySelector('.minus-button').addEventListener('click', minus);
const plusButton = document.querySelector('.plus-button').addEventListener('click', plus);
const resetButton = document.querySelector('.mute-button').addEventListener('click', mute);
// const randomButton = document.querySelector('.random-button').addEventListener('click', random);
const submitButton = document.querySelector('.submit-button').addEventListener('click', submit);


/* const button = document.querySelector('.button');
const output = document.querySelector('.output');
let phone_content = document.querySelector('.phone');

button.addEventListener('click', updateOutput);

function updateOutput() {
    output.textContent = phone_content.value;
    alert(phone_content.value);
}
*/


// var slider = document.getElementById("myRange");
// var sliderSubmit = document.querySelector(".slider-submit-button").addEventListener('click', update);
// var sliderOutput = document.querySelector(".slider-output");


// Update the current slider value (each time you drag the slider handle)
// // function update() {
//   sliderOutput.textContent = slider.value;
// }