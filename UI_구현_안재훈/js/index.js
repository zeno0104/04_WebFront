const applyBtn = document.querySelector("#applyBtn");
const result = document.querySelector("#result");

applyBtn.addEventListener("click", () => {
  const fontWeight = document.querySelector("input[name='fontWeight']:checked");
  const width = document.querySelector("#width");
  const height = document.querySelector("#height");
  const fontSize = document.querySelector("#fontSize");
  const color = document.querySelector("#color");
  const backgroundColor = document.querySelector("#backgroundColor");
  const content = document.querySelector("#content");
  const rowSort = document.querySelector("input[name='rowSort']:checked");
  const colSort = document.querySelector("input[name='colSort']:checked");

  const div = document.createElement("div");
  const p = document.createElement("p");
  div.style.width = width.value + "px";
  div.style.height = height.value + "px";
  div.style.backgroundColor = backgroundColor.value;
  div.style.display = "flex";
  div.style.justifyContent = rowSort.value;
  div.style.alignItems = colSort.value;
  div.style.border = "4px solid #000";
  p.style.color = color.value;
  p.style.margin = 0;
  p.style.fontSize = fontSize.value + "px";
  p.style.fontWeight = fontWeight.value;

  p.innerText = content.value;

  div.append(p);
  result.append(div);
});
