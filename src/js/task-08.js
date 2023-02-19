
const inputRef = document.querySelector("form.login-form");
inputRef.addEventListener("submit", auditSubmit);


function auditSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return console.log("всі поля повинні бути заповнені!");
  }

  console.table({ email: email.value, Password: password.value });
  event.currentTarget.reset();
}