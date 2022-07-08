function LongestWord(sen) {
  let arr = sen.match(/[a-z]+/gi)

  return arr
      .sort(function(a, b) {
        return b.length - a.length
      })
      .shift()
}

console.log(LongestWord('fun&!! time'))
