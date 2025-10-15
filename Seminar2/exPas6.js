// Funcție pentru calcularea elementului de ordin n din șirul lui Fibonacci
function fibonacci(n) {
    if (n <= 0) return 0;
    if (n === 1) return 1;
    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        let temp = a + b;
        a = b;
        b = temp;
    }
    return b;
}

// Preluare parametru din linia de comandă
const n = parseInt(process.argv[2]);
if (isNaN(n)) {
    console.log('Te rog să introduci un număr întreg ca parametru.');
} else {
    console.log(`Elementul de ordin ${n} din șirul lui Fibonacci este: ${fibonacci(n)}`);
}
