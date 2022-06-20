function rgb(r, g, b) {
  // complete this function
  return toHex(r) + toHex(g) + toHex(b);
}
const toHex = (value) => {
  return value < 256 ? Math.abs(value).toString(16) : 0;
};

//console.log(toHex(240))
console.log(rgb(20, 194, 110));
