
var max = process.argv[2] || 100;
var primes = 0;
for (var candidate = 2; candidate < max; candidate++) {
    var isPrime = true;
    for (var c = 2; c < candidate; ++c) {
        if (candidate % c === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        primes++;
    }
}

console.log(primes);