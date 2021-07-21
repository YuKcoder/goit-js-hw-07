'use strict'

const inputEl = document.querySelector('#font-size-control');
const spanText = document.querySelector('#text');

const changeFont = () => spanText.style.fontSize = inputEl.value + 'px';

inputEl.addEventListener('input', changeFont);