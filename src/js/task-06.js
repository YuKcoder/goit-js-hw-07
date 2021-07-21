'use strict'

const inputName = document.querySelector('#validation-input');

const onInputBlur = event => {
    if (event.target.value.length === Number(inputName.dataset.length)) {
        inputName.classList.add('valid');
        inputName.classList.remove('invalid');
    }
    if (event.target.value.length !== Number(inputName.dataset.length)) {
        inputName.classList.add('invalid');
        inputName.classList.remove('valid');
    }
    if (event.target.value.length === 0) {
        inputName.classList.add('#validation-input');
        inputName.classList.remove('invalid');
    }
}

inputName.addEventListener('blur', onInputBlur);
