const Arr = [5, 7, 342, 44, 76, 43, 75, 2, 43, 57, 26];

const bubbleSort = (myArr) => {
  let len = myArr.length;
  for (let j = 0; j < len; j++) {
    for (let i = 0; i < len; i++) {
      if (myArr[i] < myArr[i + 1]) {
        let temp = myArr[i];
        myArr[i] = myArr[i + 1];
        myArr[i + 1] = temp;
      }
    }
  }
  return myArr;
};

console.log(bubbleSort(Arr));

// using for..of
const bubbleSort2 = (myArr) => {
  for (let i of myArr) {
    if (myArr[i] < myArr[i + 1]) {
      let temp = myArr[i];
      myArr[i] = myArr[i + 1];
      myArr[i + 1] = temp;
    }
  }
  return myArr;
};

console.log(bubbleSort2(Arr));
