// 메뉴 주문
function check1() {
  const gimbap = 3000;
  const ramen = 3500;
  const donkkaseu = 5000;

  // 주문 개수 카운트
  let gCount = 0; // 김밥 개수
  let rCount = 0; // 라면 개수
  let dCount = 0; // 돈까스 개수

  let total = 0;
  // prompt로 입력한 값을 저장할 변수 선언
  let input; // undefiend

  // 비교연산자
  // == (값이 동일한 경우)
  // === (동일 비교 연산자 : 값, 자료형이 모두 같은 경우)

  // undefiend == null (==로 비교시 같은 값이라고 인식됨)
  // undefined === null (자료형도 같은지 비교)

  // === -> 값, 자료형이 모두 다른경우 true
  // !== -> 값, 자료형이 모두 다른 경우 true

  while (input !== null) {
    // 취소 버튼을 눌렀을 때 멈춤
    input = prompt("메뉴 번호를 입력해주세요.");

    switch (input) {
      case "1":
        gCount++;
        break;
      case "2":
        rCount++;
        break;
      case "3":
        dCount++;
        break;
      case null:
        alert("주문 완료!");
        break;
      default:
        alert("메뉴에 작성된 번호만 입력하세요!");
    }
  }

  alert(
    `김밥 : ${gCount}, 라면 : ${rCount}, 돈까스 : ${dCount}, 총 가격 : ${
      gCount * gimbap + rCount * ramen + dCount * donkkaseu
    }원`
  );
}

// 1. 1부터 200사이 숫자 입력 (프롬프트)
// 1.1 취소 -> 게임 포기
// 1.2 500
// => 1~200 사이 값만 입력
// 100
// 100 [DOWN] / 시도 횟수 : 1
// 50[UP] / 시도 횟수 : 2
// . . . 정답!!!(52) / 시도 횟수 : 8

function startGame() {
  const answer = Math.floor(Math.random() * 200) + 1;

  // 정답 시도 횟수를 세기 위한 변수 선언
  let count = 0;

  // prompt에 출력할 문자열
  let str = "1부터 200사이 숫자 입력";
  console.log(answer);
  while (true) {
    let input = prompt(str);

    if (input === null) {
      // 취소 클릭 시
      alert("게임 포기");
      break;
    }
    // 숫자 입력 후 확인 클릭 시
    const value = Number(input);
    // 숫자가 아닌 문자열이 잘못 입력된 경우
    // NaN (Not a Number : 숫자가 아니다)
    // isNaN(값) :
    if (isNaN(value)) {
      // 숫자가 아닌 값을 입력한 경우
      alert("숫자만 입력해주세요!");
      continue;
    }
    if (value < 1 || value > 200) {
      // 범위 초과
      alert("1~200 사이 값만 작성해주세요");
      continue;
    }

    // 정답을 맞추기 위한 시도를 했기 때문에 count를 1 증가
    count++;
    // 정답인 경우
    if (value === answer) {
      alert(`정답 !!! (${answer}) / 시도 횟수 : ${count}`);
      break;
    }
    // 정답이 아닌 경우
    if (value < answer) {
      // 작은 경우
      str = `${value} [UP] / 시도 횟수 : ${count}`;
    } else {
      // 큰 경우
      str = `${value} [DOWN] / 시도 횟수 : ${count}`;
    }
  }
}
