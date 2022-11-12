function fibonacci(n) {
	let a = 1;
	let b = 0;

	for (let i = 1; i < n; i++) {
		[a, b] = [b, a + b];
	}

	return b;
}

module.exports = fibonacci;