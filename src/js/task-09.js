function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}



const bodyRef = document.querySelector("body");
const btnRef = document.querySelector(".change-color");
const textRef = document.querySelector(".color");

btnRef.addEventListener("click", changeBodyColor);

function changeBodyColor(event) {
  bodyRef.style.backgroundColor = getRandomHexColor();
  textRef.textContent = getRandomHexColor();
}