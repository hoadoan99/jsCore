/** @format */

const arr = [1, 2, 3, 4];

const sum = arr.reduce((sum, currentValue) => {
  return currentValue % 2 === 0 ? sum + currentValue : sum;
});
