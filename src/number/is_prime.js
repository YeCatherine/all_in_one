function isPrime(num) {
  let number = num;
  let prime = true;
  if (number > 2) {
    for (let j = 2; j < number; j++) {
      if (number % j === 0) {
        prime = false;
      }
    }
  } else if (number < 2) {
    prime = false;
  }
  return prime;
}

console.log(isPrime(0));
console.log(isPrime(1));
