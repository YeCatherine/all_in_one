//Square with memoization
const prevValues = []

function square(n) {
  if (prevValues[n] != null) {
    return prevValues[n]
  }

  let result = 0

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      result += 1
    }
  }

  prevValues[n] = result
  return result
}

console.log(square(500))

// fibonacci with memoization
function fib(n, memo = []) {
  if (memo[n] != null) {
    return memo[n]
  }

  if (n <= 2) {
    return 1
  }

  let result = fib(n - 1, memo) + fib(n - 2, memo)
  memo[n] = result

  return result
}

console.log(fib(7))
