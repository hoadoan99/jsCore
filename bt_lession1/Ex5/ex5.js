/** @format */
// addition
function addition() {
  a = Number(document.caculator.firstNumber.value);
  b = Number(document.caculator.secondNumber.value);
  c = a + b;
  //   console.log(a);
  document.caculator.total.value = c;
}
function subtract() {
  a = Number(document.caculator.firstNumber.value);
  b = Number(document.caculator.secondNumber.value);
  c = a - b;
  //   console.log(a);
  document.caculator.total.value = c;
}
function multiply() {
  a = Number(document.caculator.firstNumber.value);
  b = Number(document.caculator.secondNumber.value);
  c = a * b;
  //   console.log(a);
  document.caculator.total.value = c;
}
function divide() {
  a = Number(document.caculator.firstNumber.value);
  b = Number(document.caculator.secondNumber.value);
  c = a / b;
  //   console.log(a);
  document.caculator.total.value = c;
}
function modulus() {
  a = Number(document.caculator.firstNumber.value);
  b = Number(document.caculator.secondNumber.value);
  c = a % b;
  //   console.log(a);
  document.caculator.total.value = c;
}
