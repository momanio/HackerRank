function pangrams(s) {
  // Write your code here
  const reg = /^[a-zA-Z]+$/gm;
  return s.match(reg) ? "not pangram" : "pangram";
}
