const addBtn = document.querySelector("#add");
const calcBtn = document.querySelector("#calc");
const container = document.querySelector(".container");
// div -> 동적으로 만들어진 요소를 최종적으로 붙여야하는 대상

// 추가 버튼 클릭 시
addBtn.addEventListener("click", () => {
  /**
     * <div class="row">
          <input type="number" class="input-number" />
        </div>
     */

  // 1. div 요소 생성하기
  const div = document.createElement("div");
  // 2. row 요소에 class 추가하기
  div.classList.add("row");

  // 3. input 요소 생성하기
  const input = document.createElement("input");

  // 4. input 요소에 속성 추가하기
  //    input.type = "number";
  input.setAttribute("type", "number"); // <input type="number">
  // 5. 클래스 "input-number" 추가하기
  // input.classList.add("input-number");
  input.setAttribute("class", "input-number");
  // <input type="number" class="input-number">

  // 6. span 요소 생성하기 <span class="remove-row">&times;</span>
  const span = document.createElement("span");

  // 7. span 태그에 클래스 "remove-row" 추가
  span.classList.add("remove-row");

  // 8. span 태그 내용으로 &times; 추가(innerHTML 사용)
  span.innerHTML = "&times;";

  // 9. div.row 요소에 자식으로 input, span 추가
  // -> append는 n개를 붙일 수 있음
  /**
   * <div class="row">
        <input type="number" class="input-number">
        <span class="remove-row">&times;</span>
    </div>
   */
  div.append(input, span);
  /**
   * <div class="row">
          <input type="number" class="input-number" />
     </div>
   */

  // 10. 완성된 div.row를 container를 마지막 자식으로 추가

  container.append(div);

  // ****************************

  // 클릭된 x 버튼의 부모 요소를 제거

  // 1. 만들어진 X버튼(span)에 이벤트 리스너/핸들러 추가
  span.addEventListener("click", (e) => {
    // 2. 현재 이벤트가 발생한 요소의 부모 요소를 탐색
    // this를 사용할 수 없음
    // => 전역 객체(window)를 나타냄
    // -> e.target으로 감지할 수 있음
    const parent = e.target.parentElement;

    // 3. 부모 요소를 제거하기
    parent.remove("remove-row");
  });
});
// container.addEventListener("click", (e) => {
//   if (e.target.classList.contains("remove-row")) {
//     const btn = e.target;
//     const input = btn.previousSibling;
//     input.remove();
//     btn.remove();
//   }
// });

// 계산 버튼 클릭 시
calcBtn.addEventListener("click", () => {
  // 1. 모든 .input-number 요소 얻어오기
  const inputNumber = document.querySelectorAll(".input-number");

  // 2. for문으로 모든 요소 접근하여
  // 작성된 값(value)을 얻어와
  // 숫자로 변경한 후
  // 합계 저장 변수에 누적
  let sum = 0;

  let flag = false;
  for (let i = 0; i < inputNumber.length; i++) {
    if (inputNumber[i].value !== "" && !isNaN(inputNumber[i].value))
      flag = true;
    else {
      alert("숫자를 입력하세요!");
      return;
    }
    sum += Number(inputNumber[i].value);
  }
  // 3. alert() 결과 출력
  if (flag) {
    alert(`총합 : ${sum}`);
  }
});
