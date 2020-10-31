const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  const op = options;
  let countrepTimes = op.repeatTimes;
  let countAdtRepTimes = op.additionRepeatTimes;
  if (countrepTimes == undefined) {
    countrepTimes = 1;
  }
  if (countAdtRepTimes == undefined) {
    countAdtRepTimes = 1;
  }

  function additions() {
    let res = "";
    for (let i = 0; i < countAdtRepTimes; i++) {
      if (i === 0) {
        res += op.addition;
      } else {
        res += op.additionSeparator + op.addition;
      }
    }
    return res;
  }

  let result = '';
  
  for (let i = 0; i < countrepTimes; i++) {
    if (Object.keys(op).length === 1 && i === 0) {
      result += str;
    } else if (Object.keys(op).length === 1 && i > 0) {
      result +=  "+" + str;
    } else if (Object.keys(op).length === 2 && i === 0) {
      result += str;
    } else if (Object.keys(op).length === 2 && i > 0) {
      result += op.separator + str;
    } else if (i > 0) {
      result += op.separator + str + additions();
    } else {
      result += str + additions();
    }
  }
  return result;
};
  