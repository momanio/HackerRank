/*
 * Modify and return the array so that all even elements are doubled and all odd elements are tripled.
 *
 * Parameter(s):
 * nums: An array of numbers.
 */
const modifyArray = (nums) => {
  const temp = nums.map((value) => {
    return value % 2 === 0 ? value * 2 : value * 3;
  });

  return temp;
};
