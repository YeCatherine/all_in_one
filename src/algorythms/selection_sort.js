let array = [332, 32, 45, 7, 4, 687, 53];

const selectionSort = (arr) => {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    let index = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[index]) {
        index = j;
      }
    }

    let temporarySmallest = arr[index];
    arr[index] = arr[i];
    arr[i] = temporarySmallest;
  }

  return arr;
};

console.log(selectionSort(array));

// with for ... of
const selectionSort2 = (arr) => {
  for (let i of arr) {
    let index = i;
    let j = i + 1;
    for (j of arr) {
      if (arr[j] < arr[index]) {
        index = j;
      }
    }

    let temporarySmallest = arr[index];
    arr[index] = arr[i];
    arr[i] = temporarySmallest;

    return arr;
  }
};

console.log(selectionSort2(array));
