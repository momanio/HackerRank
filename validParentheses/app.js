function validParentheses(parens) {
  // your code here ..

  return parens[0] === "'('" && parens[parens.length - 1] === "')'"
    ? true
    : false;
}
