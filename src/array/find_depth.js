class DepthCalculator {
  calculateDepth(arr) {
    let depth = 0;
    depth = Math.max(
      ...arr.map((elem) =>
        Array.isArray(elem) ? this.calculateDepth(elem) : 0
      ),
      depth
    );
    return depth + 1;
  }
}

const depthCalc = new DepthCalculator();

console.log(depthCalc.calculateDepth([1, 2, 3, 4, 5]));
