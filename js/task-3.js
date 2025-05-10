const inputElement = document.querySelector('#name-input');
const nameElement = document.querySelector('#name-output');

inputElement.addEventListener('input', (event) => {
    const trimmedValue = event.target.value.trim();

    if (trimmedValue === "") {
        nameElement.textContent = "Anonymous";
    } else {
        nameElement.textContent = trimmedValue;
    }
});