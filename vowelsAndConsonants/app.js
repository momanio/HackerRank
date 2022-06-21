/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */

function vowelsAndConsonants(s) {
  const reg = /[aeiou]/;
  let v = [];
  let c = [];

  for (let e of s) {
    e.match(reg) ? v.push(e) : c.push(e);
  }

  for (let e of v) {
    console.log(e);
  }

  for (let e of c) {
    console.log(e);
  }
}
