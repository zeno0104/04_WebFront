const pxInfo = document.querySelector("#pxInfo");
const colorInfo = document.querySelector("#colorInfo");
const applyBtn = document.querySelector("#applyBtn");
const textAreaContent = document.querySelector("#textAreaContent");
const addBtn = document.querySelector("#add");
const contentInfo = document.querySelector("#contentInfo");

applyBtn.addEventListener("click", () => {
  console.log(pxInfo.value, colorInfo.value);
  if (pxInfo.value.length !== 0 && colorInfo.value.length !== 0) {
    textAreaContent.style.fontSize = `${Number(pxInfo.value)}px`;
    textAreaContent.style.color = colorInfo.value;
  } else {
    alert("크기, 혹은 색상 정보를 제대로 입력하세요 제발 ㅡㅡ");
  }
  pxInfo.value = "";
  colorInfo.value = "";
});

addBtn.addEventListener("click", () => {
  const p = document.createElement("p");
  p.innerHTML = textAreaContent.value;
  p.style.color = textAreaContent.style.color;
  p.style.fontSize = textAreaContent.style.fontSize;
  contentInfo.append(p);
  textAreaContent.value = "";
});
