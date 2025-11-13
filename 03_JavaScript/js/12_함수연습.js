// ------------1번------------
// name이라는 매개변수를 받아 "Hello, [name]!"를 출력하는 함수를 선언 및
// 정의하고 호출하시오

const ex1 = (name) => {
  console.log(`Hello ${name}`);
};

ex1("안재훈");

// ------------2번------------
// 두 개의 숫자를 매개변수로 받아 그 합을 반환하는 함수를
// 선언 및 정의하고 호출하시오

const ex2 = (a, b) => a + b;

console.log(ex2(1, 2));

// ------------3번------------
// 두 개의 숫자를 매개변수로 받아 곱한 결과를 반환하는 화살표 함수를 작성

const ex3 = (a, b) => a * b;

console.log(ex3(10, 10));

// ------------4번------------
const ex4 = (a, b) => {
  if (a > b) {
    console.log("첫 번째 숫자가 더 큽니다");
  } else {
    console.log("두 번째 숫자가 더 크거나 같습니다");
  }
};
ex4(1, 4);
// ------------5번------------

const ex5 = (s) => {
  console.log(s.length);
};
ex5("hello world");
// ------------6번------------
const ex6 = (s, count) => {
  for (let i = 0; i < count; i++) {
    console.log(s);
  }
};
ex6("Hello KH", 5);
// ------------7번------------
const ex7 = (num) => {
  if (num % 2 === 0) {
    console.log("짝수입니다.");
  } else {
    console.log("홀수입니다.");
  }
};
// ------------8번------------

const ex8 = (a, b, c) => {
  console.log(Math.max(a, b, c));
};
ex8(1, 2, 3);
// ------------9번------------
const ex9 = (arr) => {
  console.log(arr[0]);
};

ex9([1, 2, 3, 4]);

// ------------10번------------
const ex10 = (arr) => {
  let sum = 0;
  let avg = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += Number(arr[i]);
  }
  avg = sum / arr.length;

  return { sum, avg };
};
let result = ex10([1, 2, 3, 4, 5]);
console.log(result);
// ------------11번------------

const calc = (a, b) => {
  console.log(`${a} + ${b} = ${a + b}`);
  console.log(`${a} / ${b} = ${a / b}`);
  console.log(`${a} * ${b} = ${a * b}`);
  console.log(`${a} % ${b} = ${a % b}`);
};
const ex11 = (a, b, calc) => {
  calc(10, 20);
};
ex11(10, 20, calc);
// ------------12번------------

const handleName = () => {
  return "안재훈";
};
const sayHello = () => {
  return "님 안녕하세요";
};
const ex12 = (handleName, sayHello) => {
  console.log(`${handleName()}${sayHello()}`);
};

ex12(handleName, sayHello);
