const btn = document.querySelector("#btn");
const addItem = document.querySelector("#addItem");

btn.addEventListener("click", () => {
  const width = document.querySelector("#width");
  const height = document.querySelector("#height");
  const backgroundColor = document.querySelector("#backgroundColor");
  const color = document.querySelector("#color");
  const position = document.querySelector("input[name='position']:checked");
  const content = document.querySelector("#content");
  const fontSize = document.querySelector("#fontSize");

  console.log(position.value);
  const p = document.createElement("p");
  p.style.margin = 0;
  p.style.width = width.value + "px";
  p.style.height = height.value + "px";
  p.style.backgroundColor = backgroundColor.value;
  p.style.color = color.value;
  p.style.textAlign = position.value;
  p.style.fontSize = fontSize.value + "px";
  p.innerText = content.value;

  addItem.append(p);
});
