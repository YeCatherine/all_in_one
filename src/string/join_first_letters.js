function createDreamTeam(members) {
  function Sort() {
    let array = members.filter(function (i) {
      return parseFloat(i) !== parseFloat(i) && typeof i == "string";
    });
    let k = array.map((k) => k.trim().split(""));
    let l = [];
    for (let a = 0; a < k.length; a++) {
      l[a] = k[a][0];
    }
    return l.join("").toUpperCase().split("").sort().join("");
  }

  return Array.isArray(members) ? Sort() : false;
}

console.log(createDreamTeam(["Matt", "Ann", "Dmitry", "Max"]));
