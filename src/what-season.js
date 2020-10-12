const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
	if (date === undefined) {
		return 'Unable to determine the time of year!';
	}
	if (!date.getTime()) throw new Error();
	let yearTime = '';
	if (date.getMonth() == 0 || date.getMonth() == 1 || date.getMonth() == 11) {
		yearTime += 'winter';
	}
	else if (date.getMonth() == 2 || date.getMonth() == 3 || date.getMonth() == 4) {
		yearTime += 'spring';
	}
	else if (date.getMonth() == 5 || date.getMonth() == 6 || date.getMonth() == 7) {
		yearTime += 'summer';
	} else {
		yearTime += 'autumn'
	}

	return yearTime;
}



