document.getElementById('converterForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;

    // Example conversion rates (in reality, you would fetch these from an API)
    const conversionRates = {
        'USD': {
            'EUR': 0.85,
            'JPY': 110,
            'GBP': 0.75,
            'MMK': 2100,
            'USD': 1
        },
        'EUR': {
            'USD': 1.18,
            'JPY': 129,
            'GBP': 0.88,
            'MMK': 2500,
            'EUR': 1
        },
        'JPY': {
            'USD': 0.0091,
            'EUR': 0.0078,
            'GBP': 0.0068,
            'MMK': 19.6,
            'JPY': 1
        },
        'GBP': {
            'USD': 1.34,
            'EUR': 1.14,
            'JPY': 151,
            'MMK': 2900,
            'GBP': 1
        },
        'MMK': {
            'USD': 0.00048,
            'EUR': 0.0004,
            'JPY': 0.051,
            'GBP': 0.00034,
            'MMK': 1
        }
        // Add more conversion rates as needed
    };

    const rate = conversionRates[fromCurrency][toCurrency];
    const convertedAmount = amount * rate;

    document.getElementById('result').innerText = `${amount} ${fromCurrency} is equivalent to ${convertedAmount.toFixed(2)} ${toCurrency}.`;
});
