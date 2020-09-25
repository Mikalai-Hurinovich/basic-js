const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15;
const HALF_LIFE_PERIOD= 5730;

module.exports =  function dateSample(x) {
    if( typeof(x) !== 'string' ){
    return false;
  } else if(Number(x) !== 'number'){
    return false;
  } else {
 return Math.ceil(Math.log(MODERN_ACTIVITY/x)/(0.693/HALF_LIFE_PERIOD))};
  }
