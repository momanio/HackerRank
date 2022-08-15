function miniMaxSum(arr) {
  // Write your code here
  let sum = arr.reduce((a, b) => {
    return a + b;
  }); // reduce method will return the sum of the array
  const min = sum - Math.max(...arr);
  const max = sum - Math.min(...arr);

  return min + " " + max;
}

const minMax = (arr) => {
  // simplified without using reduce method
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  let min = sum - Math.max(...arr);
  let max = sum - Math.min(...arr);

  return min + " " + max;
};
console.log(miniMaxSum([1, 2, 3, 4, 5]));
console.time("miniMaxSum time");

console.timeLog("miniMaxSum time");

console.log(minMax([1, 2, 3, 4, 5]));

console.time("minMax time");

console.timeLog("minMax time");
