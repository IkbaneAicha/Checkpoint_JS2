// String Manipulation Functions

// Reverse a String
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Count Characters
function countCharacters(str) {
    return str.length;
}

// Capitalize Words
function capitalizeWords(sentence) {
    return sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

// Array Functions

// Find Maximum
function findMaximum(arr) {
    return Math.max(...arr);
}

// Find Minimum
function findMinimum(arr) {
    return Math.min(...arr);
}

// Sum of Array
function sumOfArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}

// Filter Array
function filterArray(arr, condition) {
    return arr.filter(condition);
}

// Mathematical Functions

// Factorial
function factorial(num) {
    if (num < 0) return undefined;
    if (num === 0) return 1;
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    return result;
}

// Prime Number Check
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Fibonacci Sequence
function fibonacci(n) {
    let sequence = [0, 1];
    for (let i = 2; i < n; i++) {
        sequence[i] = sequence[i - 1] + sequence[i - 2];
    }
    return sequence.slice(0, n);
}

// Display result in the designated output element below each section
function displayResult(result, elementId) {
    const resultElement = document.getElementById(elementId);
    if (Array.isArray(result)) {
        resultElement.textContent = `Result: ${result.join(', ')}`;
    } else {
        resultElement.textContent = `Result: ${result}`;
    }
}
