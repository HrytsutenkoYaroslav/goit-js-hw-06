const inputRef = document.querySelector("#name-input");
const textRef = document.querySelector("#name-output");

inputRef.addEventListener("input", onInputChange);

function onInputChange(event) {
    textRef.textContent = event.currentTarget.value || "Anonymous";
}