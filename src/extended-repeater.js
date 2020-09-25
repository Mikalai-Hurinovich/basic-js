const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
    if (options.separator === undefined) options.separator = "+";
    if (options.addition === undefined) options.addition = "";
    var result = "";
    result += str;
    while (options.additionRepeatTimes > 1) {
        result += options.addition;
        result += options.additionSeparator;
        options.additionRepeatTimes--
    }

    result += options.addition;
    let clone = result;
    while(options.repeatTimes > 1) {
        result += options.separator;
        result += clone;
        options.repeatTimes--;
    }

    return result
};
