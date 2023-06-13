  // Idea: factor tree
  // Two variables: divisor and currentNumber
  // currentNumber is initially equal to num and divisor is initially 2
  // We start at 2 since number/1 will always be 1 and number/0 will always be undefined.
  // Loop and divide the currentNumber by the divisor
  // If there is no remainer then change the currentNumber to that number and set divisor again to 2
  // Else increase divisor
  // Continue to loop while the half of currentNumer is greater than or equal to divisor
const largestPrimeFactor = (num) => {

  let divisor = 2;
  let currentNumber = num;
  while (currentNumber / 2 >= divisor) {
    if (currentNumber % divisor === 0) {
      currentNumber /= divisor;
      divisor = 2;
    } else {
      divisor++;
    }
  }

  return currentNumber;
};

let prime = largestPrimeFactor(600851475143);
console.log(prime);
