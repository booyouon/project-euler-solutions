const getFactors = (num) => {
  let result = [];
  for (let i = 0; i < num; i++) {
    if (num % i == 0) {
      result.push(i);
    }
  }
  return result;
};

const getPrimeFactors = (num) => {
  let factors = getFactors(num);
  let primeFactors = factors.filter((factor) => getFactors(factor).length <= 1);
  return primeFactors;
};

const largestPrimeFactor = (num) => {
  let primeFactors = getPrimeFactors(num);
  let largestNum = primeFactors[primeFactors.length - 1];
  return largestNum;
};
