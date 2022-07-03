async function* generateSequence(start, end) {
  for (let i = start; i <= end; i++) {
    // Wow, can use await!
    await new Promise((resolve) => setTimeout(resolve, 3000));

    yield i;
  }
}

(async () => {
  for await (let value of generateSequence(11, 15)) {
    setTimeout(() => {
      console.log(value);
    }, 10000);
  }
})();
