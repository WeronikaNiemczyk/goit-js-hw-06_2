const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsPlace = document.querySelector("ul");

const items = ingredients.map((ingredient) => {
  const createIngredient = document.createElement("li");
  createIngredient.classList.add("item");
  createIngredient.textContent = ingredient;
  // console.log(createIngredient);
  return createIngredient;
});
ingredientsPlace.append(...items);
