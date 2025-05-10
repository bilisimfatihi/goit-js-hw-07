function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputNumber = document.querySelector("#controls input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const divBoxes = document.querySelector("#boxes");

function createBoxes(amount){
    divBoxes.innerHTML = '';
    for (let i = 0; i < amount; i++) {
        const div = document.createElement('div');
        const size = 30 + i * 10;
        div.style.width = `${size}px`;
        div.style.height = `${size}px`;
        div.style.backgroundColor = getRandomHexColor();
        divBoxes.append(div)
      }
  }

  function destroyBoxes() {
    divBoxes.innerHTML = '';
    inputNumber.value = '';
  }

  createBtn.addEventListener('click', () => {
    const amount = Number(inputNumber.value);
    if (amount >= 1 && amount <= 100) {
        createBoxes(amount);
      } else {
        alert('Please enter a number between 1 and 100');
      }
  });
  
  destroyBtn.addEventListener('click', destroyBoxes);
