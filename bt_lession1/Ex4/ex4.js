/** @format */

// Tìm số lớn nhất trong hai số
// + Data 1: a = 12, b = -9
// + Data 2: a = 6, b = 6
// + Data 3: a = -189, b = -987
// + Data 4: a = -78, b = 56
// + Data 5: a = 9.5, b = 7.9

var array1 = [12, -9],
  largest;
array1.sort(function (a, b) {
  largest = a > b ? a : b;
  console.log(largest);
});
