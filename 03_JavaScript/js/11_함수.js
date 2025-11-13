const input1 = document.querySelector("#input1");
const btn1 = document.querySelector("#btn1");

// 2개의 값을 전달받아 콘솔로 단순히 출력하는 기능
function print1(a, b) {
  // 함수 선언
  console.log(`${a} 은/는 ${b} 입니다.`);
}

// btn1 클릭 시 input1의 값을 읽어와 print1() 함수 호출

btn1.addEventListener("click", function () {
  const value = input1.value;

  if (value.length == 0) {
    console.log("값을 입력하세요.");
    return;
  }

  let result; // 입력된 값이 0 / 양수 / 음수인지 판별 후 저장

  if (Number(value) === 0) {
    result = "0";
  } else if (Number(value) > 0) {
    result = "양수";
  } else {
    result = "음수";
  }

  // "123은 양수입니다" 출력
  print1(value, result); // 함수 호출

  // 중요!! 전달인자의 값의 순서가 중요합니다!
});

// 매개변수로 배열 전달하기

// 매개변수로 전달받은 배열의 모든 요소를 콘솔에 출력하는 함수
const arrayTest = (arr, num) => {
  // let num = 0;
  for (let i = 0; i < arr.length; i++) {
    // arr[i]에 있는 값이 딸기와 일치하면
    // 해당 요소의 값을 멜론으로 재대입해라
    if (arr[i] === "딸기") arr[i] = "멜론";
    console.log(`${i} 번째 인덱스 값 : ${arr[i]}`);
    num = 100;
  }
};

document.querySelector("#btn2a").addEventListener("click", function () {
  const arr = ["사과", "바나나", "딸기"]; // 참조타입
  let x = 0; // 원시 타입

  arrayTest(arr, x);

  console.log("arr[2] : ", arr[2]);
  // 왜 딸기가 아니라 멜론일까?
  // 배열 -> 참조형(주소를 가짐)
  // arrayTest() 함수에 전달인자로 arr을 전달하면
  console.log(x);
  // x는 원시타입으로 값 자체를 전달할 뿐, 주소값을 전달하는게 아니기 떄문에
  // 복사본의 값이 변경되도 원본의 값은 변경되지 않음

  // 원시타입 종류
  // string / number / boolean / undefined / null ...
  // 원시타입 : 객체가 아니라, 값 자체를 저장(원본 불변)
  // Object, Array, Function..
  // 참조형(객체타입) : 메모리에 저장된 주소를 참조함(복사본 변경되면, 원본도 변함)
});

// 매개변수로 요소 전달하기
function btn2bFn(el) {
  // 매개변수 el (Element) : 이벤트가 발생한 요소
  // -> <button id="btn2b" onclick="btn2bFn(this)"> 매개변수로 요소 전달하기</button>
  el.style.backgroundColor = "yellow";
}

// 매개변수로 함수 전달하기
function print2(fn) {
  console.log(`a + b = ${fn(1, 2)}`);
}

document.querySelector("#btn2c").addEventListener("click", function () {
  // print2 함수를 활용

  // 함수도 변수에 저장 가능 (변수명 == 함수명)
  const sumFn = function (a, b) {
    return a + b; // 함수 종료 + 값을 가지고 호출한 곳으로 되돌아감.
  };

  // print2 함수에 전달인자로 sumFn을 전달
  print2(sumFn);
});

// 화살표 함수

// 클래스가 arrow인 요소를 모두 얻어와 저장(배열)
const arrowList = document.querySelectorAll(".arrow");

arrowList[0].addEventListener("click", () => {
  alert("화살표 함수 기본 형태 연습");
});

// 매개변수가 1개인 경우 : () 생략 가능
arrowList[1].addEventListener("click", (e) => {
  e.target.style.backgroundColor = "pink";
  //   this.style.backgroundColor = "pink";
  // Uncaught TypeError: Cannot set properties of undefined (setting 'backgroundColor')
  // at HTMLButtonElement.<anonymous> (11_함수.js:107:30)

  // 화살표 함수에서의 this
  // 이벤트가 일어난 대상 객체가 아니라
  // 전역 객체(window)
  // e.target은 객체 그 자체를 가리킴
  console.log(this);
});

// return 한 줄만 작성된 경우
arrowList[2].addEventListener("click", (e) => {
  twoNumberPlus((a, b) => a + b);
  //   twoNumberPlus((a, b) => {
  //     return a + b;
  //   });
  //
});

const twoNumberPlus = (otherFn) => {
  alert(otherFn(1, 2));
};

// return 한줄만 있지만 JS Object 반환하는 경우

function printObject(otherFn) {
  const obj = otherFn("홍길동", 20);
  console.log(obj);
}

arrowList[3].addEventListener("click", () => {
  printObject((name, age) => {
    return { name: name, age: age };
  });
});

// 즉시 실행 함수
(() => {
  console.log("11_함수.js 파일 로드됨");
})();
