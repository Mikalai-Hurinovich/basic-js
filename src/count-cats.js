const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
return backyard.map((matrix) => matrix.filter((item) => item === '^^')).flat().length;
};
