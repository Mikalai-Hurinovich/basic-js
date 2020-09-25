const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(x, y) {
    let obj = {}
    obj.turns = Math.pow(2, x) - 1;
    obj.seconds = Math.floor(obj.turns / ( y / 3600))

    return obj
}
