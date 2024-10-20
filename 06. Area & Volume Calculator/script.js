import {calculateCircleArea} from './calculations.js';

const option = document.getElementById('option');
const circleArea = document.getElementById('circleArea');
const triangleArea = document.getElementById('triangleArea');

function showInputs() {
    // Hide all input containers initially
    const inputContainers = document.querySelectorAll('.input-container');
    inputContainers.forEach(container => {
        container.style.display = 'none';
    });

    // Show the selected input container based on the option value
    const selectedInput = document.getElementById(`${option.value}-Area`);
    if (selectedInput) {
        selectedInput.style.display = 'block';
    }
}

// Function to reset and show all input containers
function showAllInputs() {
    const inputContainers = document.querySelectorAll('.input-container');
    inputContainers.forEach(container => {
        container.style.display = 'block'; // Show all input containers
    });
}

// Call showAllInputs to initially display all inputs
showAllInputs();

document.querySelector('#calculateCircle').addEventListener('click', () => {
    const radius = parseFloat(document.querySelector('#circleRadius').value);
    calculateCircleArea(radius);
});