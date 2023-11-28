document.addEventListener("DOMContentLoaded", function () {
  const nameField = document.getElementById("name");
  const emailField = document.getElementById("email");
  const messageField = document.getElementById("message");
  const form = document.querySelector("form");

  // Check if an input meets a length requirement
  const validLength = (input, min) => {
    if (input.value.trim().length >= min) {
      input.parentElement.classList.remove("invalid");
      input.setCustomValidity("");
    } else {
      input.parentElement.classList.add("invalid");
      input.setCustomValidity(`Please enter at least ${min + 1} characters.`);
    }
  };

  // Validate email with a regular expression
  const validateEmail = (email) => {
    const regex = /\w+@\w+\.\w+/;
    if (regex.test(email.value.trim())) {
      email.parentElement.classList.remove("invalid");
      email.setCustomValidity("");
    } else {
      email.parentElement.classList.add("invalid");
      email.setCustomValidity("Please enter a valid email address.");
    }
  };

  // Add event listener to Form Submitted
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Perform the all required validations
    const isNameValid = validLength(nameField, 2); // Name must be 3 or more characters
    const isEmailValid = validateEmail(emailField);
    const isMessageValid = validLength(messageField, 9); // Message must be 10 or more characters

    // If all validations pass, you can proceed with form submission
    if (isNameValid && isEmailValid && isMessageValid) {
      console.log("Form is valid. Ready to submit!");
    }
  });

  // Toggle additional fields based on the reason for contact
  document
    .getElementById("contactReason")
    .addEventListener("change", toggleFields);
});

const toggleFields = () => {
  let selection = document.getElementById("contactReason").value;
  let jobDetails = document.getElementById("jobDetails");
  let codingLanguage = document.getElementById("codingLanguage");

  if (selection === "Job opportunity") {
    jobDetails.classList.remove("hidden");
    codingLanguage.classList.add("hidden");
  } else if (selection === "Talk code") {
    jobDetails.classList.add("hidden");
    codingLanguage.classList.remove("hidden");
  } else {
    jobDetails.classList.add("hidden");
    codingLanguage.classList.add("hidden");
  }
};
