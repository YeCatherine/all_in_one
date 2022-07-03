function factorial(num) {
  if (num <= 1) {
    return 1;
  }

  return num * factorial(num - 1);
}

let fact = factorial;
console.log(fact(5));

/**
 * With arrow function
 */
const newFact = (num) => {
  if (num <= 1) {
    return 1;
  }

  return num * newFact(num - 1);
};
console.log(newFact(7));
