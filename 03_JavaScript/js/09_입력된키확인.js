// 키보드를 누르고 있을 때 : keydown
// 키보드를 떼었을 때 : keyup

// toUpperCase() : 소문자 -> 대문자
// toLowerCase() : 대문자 -> 소문자

// 이벤트가 일어나는 대상 누구인가? -> document

// 화면에 존재하는 key 모두 얻어오기
// const keys = document.querySelectorAll(".key");

// console.log(keys);

// // 화면에서 키가 눌러지는걸 감지했을 때

// const PINK = "hotpink";
// const WHITE = "white";

// function checkIdx(e) {
//   let idx = 0;
//   switch (e.key.toLowerCase()) {
//     case "q":
//       idx = 0;
//       break;
//     case "w":
//       idx = 1;
//       break;
//     case "e":
//       idx = 2;
//       break;
//     case "r":
//       idx = 3;
//       break;
//     default:
//       return; // 함수 종료
//   }
//   return idx;
// }
// document.addEventListener("keydown", function (e) {
//   // -----------t_sol-----------

//   let idx = checkIdx(e); // 인덱스 값을 저장할 변수

//   // idx 번호와 일치하는 keys 배열의 요소 배경색을 변경

//   keys[idx].style.backgroundColor = PINK;

//   // -----------my_sol-----------
//   //   if (e.key.toLowerCase() === "q") {
//   //     keys[0].style.backgroundColor = PINK;
//   //   } else if (e.key.toLowerCase() === "w") {
//   //     keys[1].style.backgroundColor = PINK;
//   //   } else if (e.key.toLowerCase() === "e") {
//   //     keys[2].style.backgroundColor = PINK;
//   //   } else if (e.key.toLowerCase() === "r") {
//   //     keys[3].style.backgroundColor = PINK;
//   //   }
// });

// document.addEventListener("keyup", function (e) {
//   // -----------t_sol-----------

//   let idx = checkIdx(e); // 인덱스 값을 저장할 변수

//   keys[idx].style.backgroundColor = WHITE;

//   // -----------my_sol-----------
//   //   if (e.key.toLowerCase() === "q") {
//   //     keys[0].style.backgroundColor = WHITE;
//   //   } else if (e.key.toLowerCase() === "w") {
//   //     keys[1].style.backgroundColor = WHITE;
//   //   } else if (e.key.toLowerCase() === "e") {
//   //     keys[2].style.backgroundColor = WHITE;
//   //   } else if (e.key.toLowerCase() === "r") {
//   //     keys[3].style.backgroundColor = WHITE;
//   //   }
// });

const keys = document.querySelectorAll(".key");

const keyMap = { q: 0, w: 1, e: 2, r: 3 };

// 키보드 이벤트 핸들러 함수
// JS Object
// 객체명[key] -> 매핑된 value
// 객체명.key -> 매핑된 value

function changeKeyColor(e, color) {
  const idx = keyMap[e.key.toLowerCase()]; // keyMap['q'] -> 0
  // keyMap['q'] -> 0
  // keyMap['w'] -> 1
  // keyMap['e'] -> 2
  // keyMap['r'] -> 3
  // keyMap['a'] -> undefined

  // keyMap에 없는 값 입력되면 idx에는 undefined가 넘어옴
  if (idx !== undefined) {
    keys[idx].style.backgroundColor = color;
  }
}

// 키가 눌렸을 때 / 떼어졌을 때
document.addEventListener("keydown", (e) => changeKeyColor(e, "deepPink"));
document.addEventListener("keyup", (e) => changeKeyColor(e, "white"));
// 이벤트 객체(e)를 매개변수로 넘겨주지 않아도 받을 수 있음

// 이벤트가 감지되었을 때 실행해야하는 함수(ex) changeKeyColor)
// 만약 해당 함수에 전달할 인자가 없는 경우
// -> 함수명만 써도 됨 ("keydown", changeKeyColor)
// -> changeKeyColor 함수 선언부의 매개변수에서 이벤트 객체(e)를
// 가져다 쓸 수 있음

// 만약 해당 함수에 전달할 인자가 있는 경우
// -> 익명함수 형태로 작성할 것 (e) => { }
// -> 전달인자의 1번째 값은 e를 넘겨주기, 2번 째 전달인자부터 내가 전달하고싶은
// 데이터 나열...
// -> ("keydown", ()  => changeKeyColor(e, "deepPink"))
