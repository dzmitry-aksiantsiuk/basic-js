const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  constructor() {
    this.calculateDepth = this.calculateDepth.bind(this)
  }
  calculateDepth(arr) {
    if (Array.isArray(arr)) {
      return arr.length ? 1 + Math.max(...arr.map(this.calculateDepth)) : 1;
    }
    return 0;
  }
};