const memo = []

function MinWindowSubstring(strArr) {
  if (memo[strArr[0]] != null) {
    return memo[strArr[0]]
  }

  let str = strArr[0]
  let needle = strArr[1].split('')
  let len = str.length
  let run = needle.length

  //start with the smallest possible substrings, then go up
  for (let i = run; i <= len; i++) {
    for (let j = 0; j <= len - i; j++) {
      let mySlice = str.substr(j, i)

      if (isContained(mySlice)) {
        memo[strArr[0]] = mySlice

        return mySlice
      }
    }
  }
  return 'Nope'

  // ---------------------- helpers -----------------------------
  //isContained checks to see if all the chars in the needle are in the given string
  function isContained(str) {
    let arr = str.split('')

    for (let i = 0; i < run; i++) {
      let place = arr.findIndex((val) => {
        return val === needle[i]
      })

      //   return (place === -1 )? false : arr.splice(place, 1);
      if (place === -1) {
        return false
      } else {
        arr.splice(place, 1)
      }
    }
    return true
  }
}

console.log(MinWindowSubstring(['ahffaksfajeeubsne', 'jefaa']))
