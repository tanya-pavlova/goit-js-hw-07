
const decrementBtnRef = document.querySelector('[data-action="decrement"]');

const incrementBtnRef = document.querySelector('[data-action="increment"]');

const numberRef = document.getElementById('value');

let numberValue = 0;

const decrement = () => {
    numberValue -= 1;
    numberRef.textContent = numberValue;
};

const increment = () => {
    numberValue += 1;
    numberRef.textContent = numberValue;
};

decrementBtnRef.addEventListener('click', () =>  decrement() ); 
incrementBtnRef.addEventListener('click', () =>  increment() );