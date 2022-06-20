/**
 *   Return the second largest number in the array.
 *   @param {Number[]} nums - An array of numbers.
 *   @return {Number} The second largest number in the array.
 **/
function getSecondLargest(nums) {
  // Complete the function
  // const temp = nums.sort((a,b)=>{  return b - a })[1]
  const temp = [...new Set(nums)]; // using Set method to remove the dublicate values
  console.log(temp);
  return temp.sort((a, b) => {
    //sort all values in temp -->  default sort order is ascending
    return b - a;
  })[1];
}
// Set method https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
