function check(str, bracketsConfig) {
  let resultArr = [];
  let initial = 0;
  let qnt = str.length;
  let i = 0;

  for (i; i < qnt; i++) {
    for (const [x, y] of bracketsConfig) {
      if (str[i] === y) {
        if (resultArr[initial - 1] === x) {
          resultArr.pop();
          initial--;
        } else {
          resultArr.push(str[i]);
          initial++;
        }
      } else {
        if (str[i] === x) {
          resultArr.push(str[i]);
          initial++;
        }
      }
    }
  }
  return !resultArr.length;
}

console.log(check("()", [["(", ")"]]));
