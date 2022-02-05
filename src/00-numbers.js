/**
 * Add all numbers in the array together to produce a single number.
 *
 * @param {number[]} values - An array of whole numbers.
 * @returns {number} - The sum of all numbers in the array.
 */
function addAllNumbers(values) {
  let sum = 0;
  for (let number of values) {
    sum += number;
  }
  return sum;
}

/**
 * Multiply each number in the array by 2 and return a new array with the doubled values.
 *
 * @param {number[]} values - An array of whole numbers.
 * @returns {number[]} - An array of whole numbers.
 */
function doubleAllNumbers(values) {
  let product = 0;
  let prodArr = [];

  for (let number of values) {
    prodArr.push(number * 2);
  }

  return prodArr;
}

/**
 * Return an array of only the even numbers in the inputted array.
 *
 * @param {number[]} values - An array of whole numbers.
 * @returns {number[]} - An array of only even numbers.
 */
function getAllEvenNumbers(values) {
  let evenArr = [];

  for (number of values) {
    if (number % 2 == 0) {
      evenArr.push(number);
    }
  }

  return evenArr;
}

/**
 * Return the number given if it is in the array. Otherwise, return `null`.
 *
 * @param {number[]} values - An array of whole numbers.
 * @param {number} val - A specific value to find.
 * @returns {number|null} - The found number or `null`.
 */
function findNumberByValue(values, val) {
  if (values.includes(val)) {
    return val;
  } else {
    return null;
  }
}

/**
 * Return `true` if all numbers in the array are negative. Otherwise, return `false`. Ignore `0` in determining whether or not an array includes all negative numbers.
 *
 * @param {number[]} values - An array of whole numbers.
 * @returns {boolean} - Whether or not all numbers in the array are negative.
 */
function allNumbersAreNegative(values) {
  let found = 0;

  if (values.length == 0){
    return false;
  }

  for (number of values) {
    if (number > 0) {
      return false;
    } 
  }
  return true;
}

/**
 * Return the largest number in the array. If the array is empty, return `null`.
 *
 * @param {number[]} values - An array of whole numbers.
 * @returns {number} - The largest number in the array.
 */
function getLargestNumber(values) {
  if (values.length == 0){
    return null;
  }

  let largest = values[0];
  for (let i = 1; i < values.length;i++){
    if (values[i] > largest){
      largest = values[i];
    }
  }
  return largest;
}

module.exports = {
  addAllNumbers,
  doubleAllNumbers,
  getAllEvenNumbers,
  findNumberByValue,
  allNumbersAreNegative,
  getLargestNumber,
};
