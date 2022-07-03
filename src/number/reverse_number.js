function reverse(n) {
  let abs = Math.abs(n);
  abs = abs + "";
  return abs.split("").reverse().join("");
}

console.log(reverse(123));
