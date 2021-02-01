
const inputRef = document.querySelector('input#name-input');
const outputRef = document.querySelector('span#name-output');

inputRef.addEventListener ('input', onInputChange);

function onInputChange(event) {
    outputRef.textContent = event.target.value
    ?event.target.value
    :'незнакомец';

}