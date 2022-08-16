const getMaxLessThanK = (n, k) => {
  return (k | (k - 1)) > n ? k - 2 : k - 1;
};

const getMaxLessThanK2 = (n, k) => {
  if ((k | (k - 1)) > n) {
    return k - 2;
  }

  return k - 1;
};
