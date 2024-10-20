const result = document.getElementById('result');
let isPowerOn = false;
let isDarkMode = false;

// Toggle power on/off
function togglePower() {
    isPowerOn = !isPowerOn;
    result.value = isPowerOn ? '' : 'OFF';
}

// Clear all input
function clearAll() {
    if (isPowerOn) {
        result.value = '';
    }
}

// Backspace function to remove the last character
function backspace() {
    if (isPowerOn) {
        result.value = result.value.slice(0, -1);
    }
}

// Display the value on the screen
function display(value) {
    if (isPowerOn) {
        result.value += value;
    }
}

// Perform the calculation
function calculate() {
    if (isPowerOn) {
        try {
            // Replace '^' with '**' for exponentiation
            const expression = result.value.replace('^', '**');
            result.value = eval(expression);
        } catch (error) {
            result.value = 'Error';
        }
    }
}

// Calculate trigonometric functions
function calculateTrig(func) {
    if (isPowerOn) {
        const radians = toRadians(parseFloat(result.value));
        let value;
        switch (func) {
            case 'sin':
                value = Math.sin(radians);
                break;
            case 'cos':
                value = Math.cos(radians);
                break;
            case 'tan':
                value = Math.tan(radians);
                break;
        }
        result.value = roundToDecimal(value);
    }
}

// Convert degrees to radians
function toRadians(degrees) {
    return degrees * (Math.PI / 180);
}

// Square root function
function sqrt() {
    if (isPowerOn) {
        result.value = Math.sqrt(parseFloat(result.value));
    }
}

// Inverse function (1/x)
function inverse() {
    if (isPowerOn) {
        result.value = 1 / parseFloat(result.value);
    }
}

// Round the result to a reasonable number of decimal places
function roundToDecimal(num) {
    return Math.round(num * 1000000) / 1000000;
}

// Toggle between light and dark themes
function toggleTheme() {
    isDarkMode = !isDarkMode;
    document.body.classList.toggle('dark-mode', isDarkMode);
}

// Handle the theme button state
document.getElementById('theme-toggle').textContent = isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode';
