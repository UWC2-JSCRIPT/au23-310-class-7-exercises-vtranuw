// TODO
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const form = document.getElementById("connect-form");
// check if an input meets a length requirement
const validLength = (input, min) => {
  if (input.value.trim().length > min) {
    input.parentElement.classList.remove("invalid");
  } else {
    input.parentElement.classList.add("invalid");
  }
};
const validateEmail = (email) => {
const regex = /\w+@\w+\.\w+/;
if (regex.test(email.value.trim())) {
email.parentElement.classList.remove("invalid");}
else {
email. parentElement. classList.add("invalid");}
};

form. addEventListener ("submit", (e) =>{
    e.preventDefault();
    validLength(firstName, 3);
    validLength(lastName,
    3);
    validateEmail(email);
});
