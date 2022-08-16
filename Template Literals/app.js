const sides = (literals, ...expressions) => {
  const area = expressions[0];
  const perimeter = expressions[1];

  const d = Math.sqrt(perimeter * perimeter - 16 * area);

  let s1 = (perimeter + d) / 4;
  let s2 = area / s1;

  literals = [s1, s2];

  return literals.sort();
};
