const buttonD = document.querySelector('[data-action="decrement"]');
const buttonI = document.querySelector('[data-action="increment"]');
const counter = document.querySelector("#value");

let counterValue = 0;

buttonD.addEventListener("click", (event) => {
  counterValue = counterValue - 1;
  //   console.log(counterValue);
  counter.textContent = counterValue;
});

buttonI.addEventListener("click", (event) => {
  counterValue = counterValue + 1;
  //   console.log(counterValue);
  counter.textContent = counterValue;
});
