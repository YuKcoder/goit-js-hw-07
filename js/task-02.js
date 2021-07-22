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

const allIngredients = [...ingredients].forEach(ingredient => {
    const createEl = document.createElement('li');
    createEl.append(ingredient);
    console.log(createEl);
    return ulList.append(createEl);
});