function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}



const bodyRef = document.querySelector("body");
const btnRef = document.querySelector(".change-color");
const textRef = document.querySelector("span.color");



const changeColor = (event) => {
  bodyRef.style.backgroundColor = getRandomHexColor();
  textRef.textContent = bodyRef.style.backgroundColor ;
}

btnRef.addEventListener("click", changeColor);



