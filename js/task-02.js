const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsPlace = document.querySelector("ul");

ingredients.forEach((ingredient) => {
  const createIngredient = document.createElement("li");
  createIngredient.classList.add("item");
  createIngredient.textContent = ingredient;
  // console.log(createIngredient);
  ingredientsPlace.append(createIngredient);
});
