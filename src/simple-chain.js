const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (arguments.length === 0) {
      this.chain.push("");
    }
    this.chain.push(value);
    return this;
  },
  removeLink(position) {
    if (this.chain[position - 1] === undefined || typeof position !== "number") {
      this.chain = [];
      throw new Error();
    } else {
      this.chain.splice(position - 1, 1);
      return this;
    }
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let result = this.chain.reduce((acc, el, i) => {
      if (i === 0) {
        acc += `( ${el} )`;
        return acc;
      } else {
        acc += `~~( ${el} )`;
        return acc;
      }
    }, "");
    this.chain = [];
    return result;
  }
};

module.exports = chainMaker;
