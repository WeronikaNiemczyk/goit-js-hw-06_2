const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.target;

  if (email.value === "" || password.value === "") {
    return alert("Wszystkie pola powinny zostać uzupełnione!");
  } else {
    console.log(`E-mail: ${email.value}, Password: ${password.value}`);
  }
  event.target.reset();
});
