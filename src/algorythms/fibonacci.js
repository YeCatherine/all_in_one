// get the value of number in fibonacci
const fibonacci = (n) => {
  let [a, b, temp] = [1, 0];

  while (n >= 1) {
    temp = a;
    a = a + b;
    b = temp;
    n--;
  }
  return b;
};

console.log(fibonacci(7));

// get all the fib numbers untill num
const fibonacci2 = (n) => {
  let [a, b, temp] = [1, 0];
  let arr = [];

  while (a <= n) {
    temp = a;
    a = a + b;
    b = temp;

    arr.push(b);
  }
  return arr;
};

console.log(fibonacci2(25));
