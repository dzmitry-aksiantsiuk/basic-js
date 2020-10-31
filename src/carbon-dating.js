const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (sampleActivity !== 'string' || Number.isNaN(value1)) {
    return false;
  }
  const value1 = Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity));
  const value2 = 0.6931 / HALF_LIFE_PERIOD;
  const sampleAge = Math.round(value1 / value2);
  return sampleAge;
};