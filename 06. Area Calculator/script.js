import {
    calculateCircleArea,
    calculateTriangleArea,
    // Add other shape calculations here
} from './calculations.js';

const option = document.getElementById('option');
const resultValue = document.getElementById('resultValue');

function showInputs() {
    const inputContainers = document.querySelectorAll('.input-container');
    inputContainers.forEach(container => {
        container.style.display = 'none';
    });

    const selectedInput = document.getElementById(`${option.value}-Area`);
    if (selectedInput) {
        selectedInput.style.display = 'block';
    }
}

option.addEventListener('change', showInputs);

// Handle calculations
document.querySelector('#calculateCircle').addEventListener('click', () => {
    const radius = parseFloat(document.querySelector('#circleRadius').value);
    if (!isNaN(radius)) {
        const area = calculateCircleArea(radius);
        resultValue.textContent = `Circle Area: ${area.toFixed(2)}`;
    }
});

// Add similar event listeners for other shapes
showInputs(); // Initialize visibility
