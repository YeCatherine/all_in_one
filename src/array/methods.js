const myAwesomeArray = [1, 2, 3, 4, 5];

// reduce
const myAwesomeReduce = myAwesomeArray.reduce((acc, val) => val * acc);

console.log(myAwesomeReduce);
console.log(myAwesomeArray);

//some

const myAwesomeSome = myAwesomeArray.some((test) => test === 3);

console.log(myAwesomeSome);

//every
const myAwesomeEvery = myAwesomeArray.every((el) => el < 7);

console.log(myAwesomeEvery);

//map
const myAwesomeMap = myAwesomeArray.map((el) => el + 2);

console.log(myAwesomeMap, "map");

//forEach
console.log(myAwesomeArray);
const myAwesomeForEach = myAwesomeArray.forEach((el) => el + 2);
myAwesomeArray.forEach((el) =>
  console.log(el, "uses function with every element")
);

console.log(
  myAwesomeForEach,
  "forEach : returns undefined, do not use with other methods, mutator"
);
console.log(myAwesomeArray);

const inlineArr = [[1, 2], 3, [4, 5], [5, [6, [7, [8, 9]]]]];

//flat
const inlineFlat = inlineArr.flat().flat();
console.log(inlineFlat, "flat");

//filter
const myFilter = myAwesomeArray.filter((el) => el % 2 === 0);

console.log(myFilter);

//findIndex
const myFindIndex = myAwesomeArray.findIndex((el) => el === 5);

console.log(myFindIndex);

//find
const myFind = myAwesomeArray.find((el) => el % 2 === 0);
console.log(myFind, "comparing vs filter -- find returns the first true");

//sort
const mySort = inlineFlat.sort((a, b) => b - a);
console.log(mySort);

//includes
const myIncludes = inlineFlat.includes(5);
console.log(myIncludes);
