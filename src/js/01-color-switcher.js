const startBtn = document.querySelector('[data-start]');
const stoptBtn = document.querySelector('[data-stop]');
const elBody = document.querySelector('body');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

startBtn.addEventListener('click', startBtnColor);
stoptBtn.addEventListener('click', stopBtnColor);

stoptBtn.disabled = true;

const INTERVAL_DELAY = 1000;
let timerId = null;

function startBtnColor() {
  function colorBody () {
    elBody.style.backgroundColor = getRandomHexColor();
  }
    timerId = setInterval(colorBody, INTERVAL_DELAY);

  startBtn.disabled = true;
  stoptBtn.disabled = false;
}

function stopBtnColor() {
  clearInterval(timerId);
  stoptBtn.disabled = true;
  startBtn.disabled = false;
}