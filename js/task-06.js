const inputRef = document.querySelector('#validation-input');
inputRef.addEventListener('blur', event => {
    const { value } = event.target;

    if (value.length === 6) {
        inputRef.classList.add('valid');
        inputRef.classList.remove('invalid');
    }
    else {
        inputRef.classList.add('invalid');
        inputRef.classList.remove('valid');

    }
});

inputRef.addEventListener('focus', event =>{
    event.target.classList.remove('invalid');
})