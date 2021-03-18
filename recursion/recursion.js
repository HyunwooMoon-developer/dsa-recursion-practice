//Q1. Counting Sheep

function countingSheep(number) {
  if (number === 0) {
    return "All sheep jumped over the fence";
  }
  console.log(number + ":Another sheep jumps over the fence");
  return countingSheep(number - 1);
}

countingSheep(5);

//Q2. Power Calculator

function powerCalculator(base, exponent) {
  if (exponent < 0) {
    return "exponent should be >= 0";
  } else if (exponent === 0) {
    return 1;
  }

  return base * powerCalculator(base, exponent - 1);
}

console.log(powerCalculator(10, 0));
console.log(powerCalculator(10, -2));
console.log(powerCalculator(10, 5));

//Q3. Reverse String

function reverse(string) {
  if (string === "") {
    return "";
  }
  return reverse(string.slice(1)) + string[0];
}

console.log(reverse("abc"));

//Q4. nth Triangular

function nthTriangular(number) {
  if (number === 1) {
    return 1;
  }
  return number + nthTriangular(number - 1);
}

console.log(nthTriangular(10));
console.log(nthTriangular(3));

//Q5. String Splitter

function stringSplitter(string, character) {
  if (!string) {
    return "";
  }

  if (string[0] === character) {
    return stringSplitter(string.slice(1), character);
  } else {
    return string[0] + stringSplitter(string.slice(1), character);
  }
}

console.log(stringSplitter("02/20/2020", "/"));

//Q6. Fibonacci

function fibonacci(number) {
  if (number === 1 || number === 2) {
    return 1;
  }
  return fibonacci(number - 2) + fibonacci(number - 1);
}

console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(4));

//Q7. Factorial

function factorial(number) {
  if (number === 1) {
    return 1;
  }
  return number * factorial(number - 1);
}

console.log(factorial(5));

//Q. Binary

function binary(number) {
  if (number === 0 || number === 1) {
    return number.toString();
  }

  const lsb = (number % 2).toString();
  const restOfBitsInDecimal = Math.floor(number / 2);
  const restOfBitsInBinary = binary(restOfBitsInDecimal);
  return restOfBitsInBinary + lsb;
}


console.log(binary(0));
console.log(binary(1));
console.log(binary(10));
console.log(binary(15));
