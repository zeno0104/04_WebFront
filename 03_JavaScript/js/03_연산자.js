const number1 = document.getElementById("input1");
const number2 = document.getElementById("input2");
const result = document.getElementById("calcResult");

function plusFn() {
  let num1 = Number(number1.value);
  let num2 = Number(number2.value);
  // -> input 요소에 작성된 값은 무조건 문자열(string) 형태라서
  // 더했을 때 이어쓰기 되는 문제 발생!

  // [해결방법]
  // 문자열을 숫자로 변경하는 코드를 수행
  // 숫자만 작성된 문자열("123") 을
  // 진짜 숫자 타입으로 변경하는 방법
  // -> Number("123") --> 123
  calcResult.innerText = num1 + num2;
}
function minusFn() {
  let num1 = Number(number1.value);
  let num2 = Number(number2.value);
  calcResult.innerText = num1 - num2;
}
function multiFn() {
  let num1 = Number(number1.value);
  let num2 = Number(number2.value);
  calcResult.innerText = num1 * num2;
}
function divFn() {
  let num1 = Number(number1.value);
  let num2 = Number(number2.value);
  calcResult.innerText = num1 / num2;
}
function modFn() {
  let num1 = Number(number1.value);
  let num2 = Number(number2.value);
  calcResult.innerText = num1 % num2;
}
