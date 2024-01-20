const categories = document.querySelectorAll("#categories .item");
console.log(`Number of categories: ${categories.length}`);

categories.forEach((category) => {
  const categoryNumber = category.querySelectorAll("li");
  const categoryName = category.querySelector("h2").textContent;

  console.log(`Category:  ${categoryName}`);

  console.log(`Elements:  ${categoryNumber.length}`);
});
