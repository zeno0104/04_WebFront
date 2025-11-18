const px = document.querySelector("#px");
const color = document.querySelector("#color");
const applyBtn = document.querySelector("#applyBtn");
const items = document.querySelector("#items");
const content = document.querySelector("#content");

applyBtn.addEventListener("click", () => {
  const pxValue = px.value;
  const colorValue = color.value;

  content.style.fontSize = pxValue + "px";
  content.style.color = colorValue;
});

addBtn.addEventListener("click", () => {
  const p = document.createElement("p");
  p.innerText = content.value;
  p.style.fontSize = content.style.fontSize;
  p.style.color = content.style.color;

  items.append(p);
});

const radioBtn = document.querySelector("#radioBtn");
const radios = document.querySelectorAll("input[name='count']");

radioBtn.addEventListener("click", () => {
  const checkedRadio = document.querySelector("input[name='position']:checked");
  console.log(checkedRadio.value);
});
