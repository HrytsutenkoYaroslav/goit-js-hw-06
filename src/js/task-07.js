const inputRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");

inputRef.addEventListener("input", function () {
  console.log(inputRef.value);

  textRef.style.fontSize = inputRef.value + "px";
});