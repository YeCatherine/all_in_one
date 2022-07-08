function BracketMatcher(str) {
  /*let a = "(";
  let b = ")";

  let newArr = str.split("");
  let firstArr = newArr.filter((el) => el === a);
  let second = newArr.filter((el) => el === b);

  return firstArr.length === second.length ? 1 : 0;*/

  //the simplest
  let lb = str.match(/[(]/g)
  let rb = str.match(/[)]/g)
  return rb.length === lb.length ? 1 : 0

}

console.log(BracketMatcher('(c(oder)) b(yte)'))
