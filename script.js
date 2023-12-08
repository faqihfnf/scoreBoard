const p1Button = document.querySelector("#p1-button");
const p2Button = document.querySelector("#p2-button");
const p1Display = document.querySelector("#p1-display");
const p2Display = document.querySelector("#p2-display");
const resetButton = document.querySelector("#reset");
const winPointOption = document.querySelector("#winning-score");
const button = document.querySelector("#color");

button.addEventListener("click", () => {
  const newColor = generateRandomColor();
  document.body.style.backgroundColor = newColor;
  console.log(newColor);
});

const generateRandomColor = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  return `rgb(${r}, ${g}, ${b})`;
};

let p1Score = 0;
let p2Score = 0;
let winPoint = 5;
let isGameOver = false;

function reset() {
  isGameOver = false;
  p1Score = 0;
  p2Score = 0;
  p1Display.textContent = 0;
  p2Display.textContent = 0;
  p1Button.disabled = false;
  p2Button.disabled = false;
}

p1Button.addEventListener("click", function () {
  if (!isGameOver) {
    p1Score += 1;
    if (p1Score === winPoint) {
      isGameOver = true;
      //   p1Display.classList.add("has-text-success");
      //   p2Display.classList.add("has-text-danger");
      p1Button.disabled = true;
      p2Button.disabled = true;
    }
    p1Display.textContent = p1Score;
  }
});

p2Button.addEventListener("click", function () {
  if (!isGameOver) {
    p2Score += 1;
    if (p2Score === winPoint) {
      isGameOver = true;
      //   p2Display.classList.add("has-text-success");
      //   p2Display.classList.add("has-text-danger");
      p2Button.disabled = true;
      p2Button.disabled = true;
    }
    p2Display.textContent = p2Score;
  }
});

resetButton.addEventListener("click", reset);

winPointOption.addEventListener("change", function () {
  winPoint = parseInt(this.value);
  reset();
});
