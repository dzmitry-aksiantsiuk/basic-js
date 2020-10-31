const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (Array.isArray(arr) === false) new Error;
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case '--double-next':
        result.push(arr[i + 1]);

        break;
      case '--double-prev':
        if (arr[i - 2] === '--discard-next') {
          result = result;
        } else {
          result.push(result[result.length - 1]);
        }

        break;
      case  '--discard-next':
        result = result;
        i += 1;
  
        break;
      case  '--discard-prev':
        if (arr[i - 2] === '--discard-next') {
          result = result;
        } else {
          result = result.slice(0, result.length - 1);
        }

        break;
      default:
        result.push(arr[i]);
    }
  }
  return result.filter((item) => item !== undefined);
};
