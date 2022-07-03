function repeater(str, options) {
  str = str + "";
  let count = +options.repeatTimes;
  let sep = options.separator;
  let addition = options.addition;
  let additionRepeat = +options.additionRepeatTimes;
  let additionSeparator = options.additionSeparator;

  if (typeof addition !== "undefined") {
    let part = str + addition;
    if (typeof additionRepeat !== "undefined") {
      for (let i = 0; i < additionRepeat - 1; i++) {
        if (typeof additionSeparator !== "undefined") {
          part += additionSeparator + addition;
        } else {
          part = part + "|" + addition;
        }
      }
      str = part;
    } else {
      str = str + addition;
    }
  }

  let full = str;
  for (let i = 0; i < count - 1; i++) {
    if (typeof sep !== "undefined") {
      full += sep + str;
    } else {
      full += "+" + str;
    }
  }
  return full;
}

console.log(
  repeater("STRING", {
    repeatTimes: 3,
    separator: "**",
    addition: "PLUS",
    additionRepeatTimes: 3,
    additionSeparator: "00"
  })
);
