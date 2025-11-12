function classTest() {
  // 유사 배열이란?
  // 배열처럼 index, length를 가지고 있으나
  // 배열 전용 기능(함수)를 제공하지 않음.
  // 제공하지 않는 기능 : pop(), push(), map(), filter() 등...

  // class 속성값이 cls-test인 요소 모두 얻어오기
  const divs = document.getElementsByClassName("cls-test");

  console.log(divs);

  divs[0].style.backgroundColor = "rgb(114, 203, 80)";
  divs[1].style.backgroundColor = "blue";
  divs[2].style.backgroundColor = "pink";
}

// 태그명으로 요소 접근하기
function tagNameTest() {
  const tagList = document.getElementsByTagName("li");
  console.log(tagList);

  for (let i = 0; i < tagList.length; i++) {
    tagList[i].style.backgroundColor = tagList[i].innerText;
  }
}

// name으로 요소 접근하기
function nameTest() {
  // name 속성값이 hobby인 요소를 모두 얻어와 변수에 저장
  const hobbyList = document.getElementsByName("hobby");
  console.log(hobbyList);

  let str = ""; // 체크된 값 누적할 문자열
  let count = 0; // 체크된 수 카운트

  for (let i = 0; i < hobbyList.length; i++) {
    // checkbox, radio 전용 속성 (checked)

    // input요소.checked
    // -> 요소가 체크되었다면 true, 안되었다면 false 반환
    if (hobbyList[i].checked) {
      str += hobbyList[i].value + " ";
      count++;
    }
  }
  document.getElementById(
    "name-div"
  ).innerHTML = `${str} <br><br> 선택된 취미 개수 : ${count}`;

  // ⭐⭐⭐
  // 요소.innerHTML
  // HTML 태그를 포함하여 작성한 문자열을
  // 실제 HTML 요소로 해석하여 화면에 렌더링함

  // 요소.innerText
  // 텍스트 내용만 요소 내부에 출력함(HTML 코드로 해석X)
}
function cssTest() {
  // target-div 속성의 값이 css-div 요소 얻어오기
  const container = document.querySelector("[target-div='css-div']");
  // -> 일반 속성 선택자

  container.style.border = "10px solid red";

  // 첫번째 자식 div 접근해서
  // 내용을 "CSS 선택자로 선택하여 값 변경됨" 적용해보기
  const div1 = document.querySelector("[target-div='css-div'] > div");
  div1.innerText = "CSS 선택자로 선택하여 값 변경됨";
  const div2 = document.querySelector(
    "[target-div='css-div'] > div:last-child"
  );
  div2.innerText = "첫번째 요소가 아니면 querySelector() 특징 활용 못함";

  // 모든 자식 div 한번에 선택(배열)
  const divList = document.querySelectorAll("[target-div='css-div'] > div");
  divList[0].style.fontFamily = "궁서";
  divList[1].style.fontSize = "20px";

  for (let i = 0; i < divList.length; i++) {
    divList[i].onclick = function () {
      alert(`${i}번 요소 입니다!`);
    };
  }
}
