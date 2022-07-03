function min() {
  let arr = [].slice.call(arguments);
  return arr && arr.length ? Math.min.apply(null, arr) : 0;
}

function max() {
  let arr = [].slice.call(arguments);
  return arr && arr.length ? Math.max.apply(null, arr) : 0;
}

function avg() {
  let arr = [].slice.call(arguments);
  return arr && arr.length
    ? arr.reduce((part, a) => part + a, 0) / arr.length
    : 0;
}

console.log(min(1, 2, 3, 4)); // returns 1;
console.log(max(1, 2, 3, 4)); // returns 4;
console.log(avg(1, 2, 3, 4)); // returns 2.5;)
