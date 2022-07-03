function printName(city, country) {
  console.log(`${this.firstName} ${this.lastName}, ${city} - ${country}`);
}

const myName = {
  firstName: "Ankit",
  lastName: "Saxena"
};

Function.prototype.myCall = function (context, ...args) {
  context.myFn = this;
  context.myFn(...args);
};
printName.myCall(myName, "Palia", "India"); // Ankit Saxena, Palia - India
