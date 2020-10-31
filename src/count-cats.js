const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  return matrix.reduce((acc, arr) => {
    const result = arr.filter(value => value === "^^");
    return acc + result.length;
  }, 0)
};
