'use strict';

const totalCategories = document.querySelectorAll('li.item');
console.log(`В списке ${totalCategories.length} категории`);

const arrayCategories = [...totalCategories]
    .map(categories => `Категория: ${categories.children[0].textContent} (количество элементов: ${categories.children[1].children.length})`)
    .join('\n');
console.log(arrayCategories);

