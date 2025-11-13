// 인라인 이벤트 모델 확인
function check1(btn) {
  console.log(btn);
  // 매개변수 btn == 클릭한 버튼(this)
  // 즉, => document.querySelector(""); 이것을 대체해서 사용할 수 있음

  // 현재 버튼의 배경색을 얻어와 저장
  const bgColor = btn.style.backgroundColor;

  // 버튼이 클릭 될 떄마다 yellow <-> pink
  if (bgColor === "yellow") {
    btn.style.backgroundColor = "pink";
  } else {
    btn.style.backgroundColor = "yellow";
  }
}

// ---------------------------------------------------------

// 고전 이벤트 모델 확인

// 아이디가 test1-1인 요소를 얻어와 test1a 변수에 저장

const test1a = document.querySelector("#test1-1");

// ** 고전 이벤트 모델 작성법 **
// 요소.이벤트리스너 = 이벤트핸들러

test1a.onclick = function () {
  alert("고전 이벤트 모델 확인 버튼 클릭됨");
};

// 고전 이벤트 모델 제거
// 아이디가 test1-2 버튼 클릭 시
// 아이디가 test1-1인 요소의 onclick 이벤트 리스너의
// 이벤트 핸들러 제거하기
const test2a = document.querySelector("#test1-2");

test2a.onclick = function () {
  // 기존 onclick의 이벤트핸들러(함수)를
  // null로 덮어씌움 (이벤트 제거)
  test1a.onclick = null;
  alert("test1-1의 이벤트 제거됨");
};

// 고전 이벤트 모델 단점
// #test1-3 요소를 얻어와 test1c 변수에 저장

const test1c = document.querySelector("#test1-3");

test1c.onclick = function () {
  test1c.style.backgroundColor = "red";
};

// a few moments later...

test1c.onclick = function () {
  test1c.style.color = "white";
};

// -> onclick에 저장된 값(이벤트 핸들러 함수)이
// 덮어씌워지면서 이전코드(배경색 red)가
// 사라지는 문제 발생

// ----------------------------------------

// 표준 이벤트 모델 확인
const test2 = document.querySelector("#test2");

// ** 표준 이벤트 모델 작성법 **
// 요소.addEventListener("이벤트종류", )

test2.addEventListener("click", function () {
  // 투명도 1(불투명) -> 0(투명) 0.1씩 감소

  let curr = test2.style.opacity;
  console.log(curr);
  // 맨처음에는 투명도 "" -> 1 대입

  if (curr == "") {
    test2.style.opacity = 1;
    curr = 1;
  }

  // 투명도 0.1씩 감소

  test2.style.opacity = curr - 0.1;
  if (test2.style.opacity == 0) {
    // 완전히 투명해짐
    test2.style.opacity = 1; // 다시 불투명하게 바꿈
  }
});

// #test2 요소를 클릭하면 클릭 횟수 카운트
let count = 0;
test2.addEventListener("click", function () {
  count++; // 카운트 1 증가

  // 표준 이벤트 모델의 이벤트 핸들러 내부에서 this
  // == 이벤트가 발생한 요소
  this.innerText = count;
});

const input3 = document.querySelector("#input3");
const box3 = document.querySelector("#box3");

input3.addEventListener("keyup", function (e) {
  if (e.key == "Enter") {
    box3.style.backgroundColor = input3.value;
    input3.value = null;
    input3.focus();
  }
});

box3.addEventListener("click", function (e) {
  alert(`배경색 : ${e.target.style.backgroundColor}`);
});
