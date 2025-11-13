// 배경색 입력할 input 배열
const colorInput = document.querySelectorAll(".color-input");
// 배경색 적용할 div 배열
const boxs = document.querySelectorAll(".box");
// 두 배열의 요소의 갯수, 순서가 같으니 index 번호를 공유할 수 있음

const changeButton = document.querySelector("#changeButton");

const changeColor = () => {
  for (let i = 0; i < boxs.length; i++)
    boxs[i].style.backgroundColor = colorInput[i].value;
};

changeButton.addEventListener("click", changeColor);
