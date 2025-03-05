// 3. Prime Factorization Program to store all prime factors of a number into an array

function primeFactorization(n) {
    let primeFactors = [];
    
    // Divide by 2 until n is odd
    while (n % 2 === 0) {
      primeFactors.push(2);
      n = n / 2;
    }
    
    // Try odd numbers from 3 to sqrt(n)
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
      while (n % i === 0) {
        primeFactors.push(i);
        n = n / i;
      }
    }
    
    // If n is a prime number greater than 2
    if (n > 2) {
      primeFactors.push(n);
    }
  
    console.log("Prime Factors: " + primeFactors);
  }
  
  primeFactorization(56);  // Example input: 56
  