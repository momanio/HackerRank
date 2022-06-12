const toWeirdCase = (string) =>
  [...string]
    .map((e, i) => (i % 2 ? e.toLowerCase() : e.toUpperCase()))
    .join("");
