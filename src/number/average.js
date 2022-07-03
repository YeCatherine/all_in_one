const runningAverage = () => {
  let total = [];
  return (...args) => {
    let sum = 0;
    for (let index = 0; index <= args.length; index++) {
      let argument_value = args[index];
      if (typeof argument_value === "number") {
        total.push(args[index]);
      }
    }
    for (let i = 0; i <= total.length - 1; i++) {
      sum += total[i];
    }
    return sum / total.length;
  };
};

let rAvg = runningAverage();
console.log("result -- 20", rAvg(10, 30));
console.log("result -- 15,75", rAvg(11, 12));
console.log("result -- 15", rAvg(13, 14, 15));
