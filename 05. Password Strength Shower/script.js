document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('password').addEventListener('input', () => {
        const password = document.getElementById('password').value;
        const strength = [
            (password.length >= 8), // Length check
            /[a-z]/.test(password), // Lowercase letters
            /[A-Z]/.test(password), // Uppercase letters
            /\d/.test(password),    // Numbers
            /[!@#$%^&*(),.?":{}|<>]/.test(password) // Special characters
        ].reduce((acc, curr) => acc + curr, 0) * 20; // Calculate strength

        // Update meter and text
        const strengthMeter = document.getElementById('strength-meter');
        const strengthText = document.getElementById('strength-text');
        strengthMeter.innerHTML = `<div style="width: ${strength}%"></div>`;

        // Determine color based on strength
        let color;
        if (strength < 40) {
            color = 'red';
        } else if (strength < 60) {
            color = 'orange';
        } else if (strength < 80) {
            color = 'yellow';
        } else {
            color = 'green';
        }
        strengthMeter.firstElementChild.style.backgroundColor = color;

        // Determine text message based on strength
        let message;
        if (strength < 40) {
            message = 'Weak';
        } else if (strength < 60) {
            message = 'Moderate';
        } else if (strength < 80) {
            message = 'Strong';
        } else {
            message = 'Very Strong';
        }
        strengthText.textContent = message;
    });
});
