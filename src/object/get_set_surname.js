function NamedOne(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;

  Object.defineProperty(this, "fullName", {
    get: () => {
      return `${this.firstName} ${this.lastName}`;
    },
    set: (newFullName) => {
      const fullNameArr = newFullName.split(" ");
      switch (fullNameArr.length) {
        case 1:
          checkLastName(fullNameArr);
          break;

        case 2:
          [this.firstName, this.lastName] = fullNameArr;
          break;

        default:
          alert("Please check the words");
      }
    }
  });
}

function checkLastName(name) {
  const firstNameRemain = name[0].slice(1);
  if (firstNameRemain.toLowerCase() !== firstNameRemain) {
    console.log("no space between first & last names:");
  } else {
    console.log("lastName missing:");
  }
}

var namedOne = new NamedOne("Naomi", "Wang");
console.log("Naomi Wang : ", namedOne.fullName);

namedOne.firstName = "John";
namedOne.lastName = "Doe";
console.log("John Doe:", namedOne.fullName);

namedOne.fullName = "Bill Smith";
console.log("full:", namedOne.fullName);
console.log("first:", namedOne.firstName);
console.log("last:", namedOne.lastName);

namedOne.fullName = "Tom";

namedOne.fullName = "TomDonnovan";
