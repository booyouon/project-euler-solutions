const getFactors = (num) => {
  let result = [];
  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      result.push(i);
      // add i twice if the quotient is itself
      if (num / i === i) {
        result.push(i);
      }
    }
  }
  return result;
};

const largestPrimeFactor = (num) => {
  let factors = getFactors(num);
  let largestPrimeFactor = factors.reverse().find((factor) => {
    return getFactors(factor).length <= 1;
  });
  return largestPrimeFactor;
};

