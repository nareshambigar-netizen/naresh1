function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

function generatePrimes() {
    const limit = document.getElementById("limit").value;
    const resultDiv = document.getElementById("result");

    if (!limit || limit < 2) {
        resultDiv.textContent = "Please enter a number greater than 1.";
        return;
    }

    let primes = [];

    for (let i = 2; i <= limit; i++) {
        if (isPrime(i)) primes.push(i);
    }

    resultDiv.textContent = primes.join(", ");
}
