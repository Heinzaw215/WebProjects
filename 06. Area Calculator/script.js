import {
    calculateCircleArea,
    calculateTriangleArea,
    // Add other shape calculations here
} from './calculations.js';

const option = document.getElementById('option');
const resultValue = document.getElementById('resultValue');
const canvas = document.getElementById('shapeCanvas');
const ctx = canvas.getContext('2d');

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

// Function to clear the canvas
function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Function to draw a circle on the canvas
function drawCircle(radius) {
    clearCanvas();
    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2, radius, 0, 2 * Math.PI);
    ctx.fillStyle = 'lightblue';
    ctx.fill();
    ctx.stroke();
}

// Function to draw a triangle on the canvas
function drawTriangle(base, height) {
    clearCanvas();
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, canvas.height / 2 - height / 2);
    ctx.lineTo(canvas.width / 2 - base / 2, canvas.height / 2 + height / 2);
    ctx.lineTo(canvas.width / 2 + base / 2, canvas.height / 2 + height / 2);
    ctx.closePath();
    ctx.fillStyle = 'lightgreen';
    ctx.fill();
    ctx.stroke();
}

// Handle calculations
document.querySelector('#calculateCircle').addEventListener('click', () => {
    const radius = parseFloat(document.querySelector('#circleRadius').value);
    if (!isNaN(radius)) {
        const area = calculateCircleArea(radius);
        resultValue.textContent = `Circle Area: ${area.toFixed(2)}`;
        drawCircle(radius);
    }
});

document.querySelector('#calculateTriangle').addEventListener('click', () => {
    const base = parseFloat(document.querySelector('#triBase').value);
    const height = parseFloat(document.querySelector('#triHeight').value);
    if (!isNaN(base) && !isNaN(height)) {
        const area = calculateTriangleArea(base, height);
        resultValue.textContent = `Triangle Area: ${area.toFixed(2)}`;
        drawTriangle(base, height);
    }
});

// Add similar event listeners and drawing functions for other shapes

showInputs(); // Initialize visibility
