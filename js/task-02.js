const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

  const ingredientsRef = document.querySelector('ul#ingredients');

  ingredients.forEach((item) => {
    const itemRef = document.createElement('li');
    itemRef.textContent = item;
    ingredientsRef.appendChild(itemRef);
});

console.log(ingredientsRef);