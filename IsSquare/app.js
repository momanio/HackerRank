var isSquare = function (n) {
  return n === 0 ? true : n > 0 && Math.sqrt(n) % 1 === 0; // fix me
};
// if the number = 0  will return true
// if the number greater than 0 and && the square of the number % 1 = 0 will return true
//else will return false
//simplified

function isSquare2(num) {
  if (num === 0) {
    return true;
  } else if (num > 0 && Math.sqrt(num) % 1 === 0) {
    return true;
  } else return false;
}
