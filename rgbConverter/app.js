function rgb(r, g, b) {
  // complete this function
  return toHex(r) + toHex(g) + toHex(b);
}
const toHex = (value) => {
  return value < 256 ? Math.abs(value).toString(16) : 0;
};

//console.log(toHex(240))
console.log(rgb(20, 194, 110));

//Short Version of hexColour function from MDN

// The old version
function oldHexColour(c) {
  if (c < 256) {
    return Math.abs(c).toString(16);
  }
  return 0;
}
//The es6 arrow function version
const hexColour = (c) => {
  return c < 256 ? Math.abs(c).toString(16) : 0;
};
