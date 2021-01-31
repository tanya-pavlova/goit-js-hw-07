const categoriesRef = document.querySelectorAll('li.item');
console.log(`В списке ${categoriesRef.length} категории.`);

categoriesRef.forEach(el => {
    const titleRef = el.querySelector('h2');  
    const categoriesCount = el.querySelectorAll('li');

    console.log(`Категория: ${titleRef.textContent}`);
    console.log(`Количество элементов: ${categoriesCount.length}`);
  });
