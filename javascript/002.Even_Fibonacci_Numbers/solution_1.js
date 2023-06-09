fibonacci = (n, fib = 1, arr = []) => {
  if (fib >= n) {
    return arr;
  }

  if (arr.length < 1) {
    arr.push(1);
  }

  const lastElement = arr[arr.length - 1];
  const sum = lastElement + fib;
  arr.push(sum);

  return fibonacci(n, lastElement, arr);
};

addEven = (arr) => {
  const evenArr = arr.filter((el) => el % 2 === 0);
  return evenArr.reduce((a, b) => a + b);
};

let result = fibonacci(4000000);
console.log(addEven(result));
