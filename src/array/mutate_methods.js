// -------- array.length == 0 -- 2**32
var namelistA = new Array(4294967295);
// var namelistA = new Array(4294967296); //2 в 32 степени = 4294967296
//var namelistC = new Array(-100); //отрицательная величина
var namelistC = new Array(2);

console.log(namelistA.length); //RangeError: Invalid array length
console.log(namelistC); //RangeError: Invalid array length

var fruits = ["Apple", "Banana"];

// copy array
var shallowCopy = fruits.slice();
console.log("copy array --", shallowCopy);

/* iteration*/
fruits.forEach(function (item, index, array) {
  console.log("iteration --", item, index);
});
console.log("array --", fruits);

/* add to end of array and get length*/
var addEndLength = fruits.push("Orange");
console.log("add to end of array --", addEndLength);
//console.log('array --', fruits);

/** get last array element */
var getLast = fruits.pop();
console.log("remove from the end of array --", getLast);
// console.log('array --', fruits);

/** get first element of the array */
var getFirst = fruits.shift();
console.log("remove the first element --", getFirst);
// console.log('array --', fruits);

/** add element to the beginning of array */
var addElement = fruits.unshift("Strawberry");
console.log("add the first element --", addElement);
// console.log('array --', fruits);

/** Get index of element */
var pos = fruits.indexOf("Strawberry");
console.log("Get index of element", pos);
// console.log('array --', fruits);

var removedItem = fruits.splice(pos, 1);
console.log("removed item --", removedItem);
// console.log('array --', fruits);
