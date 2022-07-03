const summa = (a) => (b) => (b ? a + b : a);
let check = summa(2)(3);
console.log(check);

//--------------------
function curry(f) {
  // curry(f) does the currying transform
  return function (a) {
    return function (b) {
      return f(a, b);
    };
  };
}

// usage
function sum(a, b) {
  return a + b;
}

let curriedSum = curry(sum);
console.log(curriedSum(1)(2)); // 3

//----------------------------------
function myCurried(a) {
  return function closed(b) {
    return a + b;
  };
}

let curr = myCurried(1)(2);
console.log(curr, "curr");
console.log(myCurried(5)(2), "myCurried");
