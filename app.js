const toWeirdCase = (string) =>
  [...string]
    .map((e, i) => (i % 2 ? e.toLowerCase() : e.toUpperCase()))
    .join("");

simplifiedWeird = (str) => {
  return [...str]
    .map((e, i) => {
      // spread operator to copy the array of the string
      if (i % 2) {
        //  if the index of string % 2 = 0 will convert the first letter to LowerCase
        return e.toLowerCase(); // Map Function to creeate new array
      } else {
        return e.toUpperCase(); // else to UpperCase
      }
    })
    .join("");
};
