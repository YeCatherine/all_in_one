function countCats(matrix) {
  let count = matrix
    .join(",")
    .split(",")
    .filter((i) => i === "^^").length;

  return count ? count : 0;
}

console.log(
  countCats([
    [0, 1, "^^"],
    [0, "^^", 2],
    ["^^", 1, 2]
  ])
);
