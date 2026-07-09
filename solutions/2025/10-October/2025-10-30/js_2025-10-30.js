// JavaScript solution for 2025-10-30
// Nth Prime
function nthPrime(n) {
	let primes = [];
	let num = 2;

	while (primes.length < n) {
		let isPrime = true;

		for (let i = 2; i < num; i++) {
			if (num % i === 0) {
				isPrime = false;
				break;
			}
		}

		if (isPrime) {
			primes.push(num);
		}

		num++;
	}

	return primes[primes.length - 1];
}