function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const input = document.querySelector(`[type="number"]`);
const boxes = document.querySelector("#boxes");

boxes.style.backgroundColor = getRandomHexColor();

const createBoxes = (amount) => {
  for (let i = 0; i < input.value; i++) {
    amount = input.value;
    const box = document.createElement("div");
    console.log(amount.value);
    console.log(box);
  }
  // amount = input.value;
  // console.log(input.textContent);
};

createButton.addEventListener("click", createBoxes);
destroyButton.addEventListener("click", destroyBoxes);
