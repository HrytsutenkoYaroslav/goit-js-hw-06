const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const inredientRef = document.querySelector('#ingredients');

const itemRef = ingredients.map(ingredient => {
  const itemListRef = document.createElement('li');
  itemListEl.textContent = ingredient;
   // console.log(itemListEl.textContent = ingredient);
  itemListRef.classList.add('itemListRef');
  return itemListRef;
});
inredientRef.append(...itemRef);
console.log(inredientRef);