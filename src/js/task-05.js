'use strict';

const input = document.querySelector('#name-input');
const nameLabel = document.querySelector('#name-output');

const onInputChange = event =>
    event.currentTarget.value === ''
        ? (nameLabel.textContent = 'незнакомец')
        : (nameLabel.textContent = event.currentTarget.value);

input.addEventListener('input', onInputChange);
