let obj = {
  name: "Jack"
};

let myFunc = function () {
  console.log(`${this.name}`);
};

Function.prototype.myBind = function (obj) {
  let func = this;
  return function () {
    func.apply(obj);
  };
};

let newFunc = myFunc.myBind(obj);
newFunc(); // Jack
