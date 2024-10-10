function checkPrime() {
    const number = document.getElementById('number').value;
    const result = document.getElementById('result');

    if (number === '') {
        result.textContent = 'You should enter a number';
        return;  // Exit the function if the input is empty
    }

    const numValue = parseInt(number);  // Parse the input to an integer
    
    if (numValue < 2) {
        result.textContent = 'Please enter a number greater than 1.';
        return;
    }

    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(numValue); i++) {
        if (numValue % i === 0) {
            isPrime = false;
            break;
        }
    }

    result.textContent = isPrime ? `${numValue} is a prime number.` : `${numValue} is not a prime number.`;
}
