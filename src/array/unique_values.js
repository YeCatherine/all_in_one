function unique(arr) {
  let uniqueCollection = new Set(arr);
  let uniqueArray = [];

  for (let value of uniqueCollection) {
    uniqueArray.push(value);
  }

  return uniqueArray;
}

let values = ["A", "B", "C", "A", "A", "C", "D", "D", "E"];

console.log(unique(values));
