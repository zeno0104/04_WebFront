function test() {
  const password = prompt("비밀번호를 입력하세요");

  console.log(password);
  // 확인 -> 입력한 값이 문자열로 저장
  // 취소 -> null

  if (password === null) {
    // 취소
    alert("취소");
  } else {
    // 확인 버튼을 눌렀다는 것
    if (password === "1234") {
      // 비밀번호가 같을 때
      alert("비밀번호 일치");
    } else {
      alert("비밀번호 불일치");
    }
  }
}
// 출금
// 1. 가능
// 2. 많을 때
// 3. 적을 때

// prompt 사용연습

const amount = document.querySelector("#amount");
// 금액 작성 input 요소 -> <input type="text" id = "amount" />
let balance = 10000; // 잔액 기록 변수
const password = "1234"; // 비밀번호
const output = document.querySelector("#output");

output.innerHTML = balance;

// 입금
function deposit() {
  // input에 입력된 금액 구하기
  // amount.value.length === 0
  // => 아무것도 입력하지 않았을 때
  if (amount.value.length === 0) {
    alert("금액을 입력해주세요!");
  } else if (Number(amount.value) <= 0) {
    alert("0원보다 큰 금액을 입력하세요");
  } else {
    // 구한 금액을 잔액(balance)에 누적
    // 구한 금액(amount.value)이 현재 string
    // -> Number() 를 이용하여 number(숫자)타입으로 형변환
    balance += Number(amount.value);
    // balance = balance + Number(amount.value);
    output.innerText = balance; // 화면에 잔액 업데이트
    alert(`입금액 : ${amount.value} => 총 잔액 : ${balance}원`);
  }
  amount.value = "";
}
// 출금
function withdrawal() {
  if (amount.value.length === 0) {
    alert("금액을 입력해주세요!");
  } else {
    const pw = prompt("비밀번호 입력");
    if (pw === null) {
      // 취소버튼 누름
      alert("취소됨");
    } else if (pw !== "1234") {
      // 비밀번호가 불일치 하는 경우
      alert("비밀번호가 일치하지 않습니다.");
    } else if (Number(amount.value) > balance) {
      alert("출금 금액이 잔액보다 클 수 없습니다.");
    } else if (Number(amount.value) <= 0) {
      alert("0원보다 큰 금액을 입력해주세요.");
    } else {
      balance -= Number(amount.value);
      output.innerText = balance;
      alert(
        `${Number(amount.value)}원이 출금 되었습니다. 남은 잔액 : ${balance}원`
      );
    }
  }
  amount.value = "";
}
