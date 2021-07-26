'use strict';

const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];

const ulList = document.querySelector('#ingredients');

const allIngredients = [...ingredients].map(ingredient => {
    const createEl = document.createElement('li');
    createEl.textContent = ingredient;
    console.log(createEl);
    return createEl;
});

ulList.append(...allIngredients);