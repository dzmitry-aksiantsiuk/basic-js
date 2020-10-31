const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (Array.isArray(members)) {
    return members.map(function(item) {
      const result = typeof(item) === "string" ? item.trim().charAt(0).toUpperCase() : '';
      return result;
    }
    ).sort().join('');
  } else {
    return false;
  }
};
