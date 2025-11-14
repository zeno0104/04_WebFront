// window.setTimeout()

document.getElementById("btn1").addEventListener("click", () => {
  window.setTimeout(() => {
    alert("3초 후 출력!");
  }, 3000);
});
const time = document.querySelector("#clock");

function currentTime() {
  const hour =
    new Date().getHours() < 10
      ? `0${new Date().getHours()}`
      : new Date().getHours();

  const minute =
    new Date().getMinutes() < 10
      ? `0${new Date().getMinutes()}`
      : new Date().getMinutes();
  const second =
    new Date().getSeconds() < 10
      ? `0${new Date().getSeconds()}`
      : new Date().getSeconds();

  return `${hour} : ${minute} : ${second}`;
}

let interval; // setInterval을 저장하기 위한 변수

function clockFn() {
  const clock = document.getElementById("clock");
  interval = setInterval(() => {
    clock.innerText = currentTime();
  }, 1000);
}
clockFn();

// window.clearInterval
document.querySelector("#stop").addEventListener("click", () => {
  clearInterval(interval);
});
