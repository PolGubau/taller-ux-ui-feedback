import "./styles.css";

const form = document.querySelector(".form");
const submitButton = document.querySelector(".button");

const requiredFields = form.querySelectorAll("[required]");

function showError(element) {
  element.nextElementSibling.classList.add("visible");
}

function hideError(element) {
  element.nextElementSibling.classList.remove("visible");
}

for (const requiredField of requiredFields) {
  requiredField.addEventListener("keyup", () => {
    if (requiredField.value === "") {
      showError(requiredField);
    } else {
      hideError(requiredField);
    }
  });
}

submitButton.addEventListener("click", () => {
  for (const requiredField of requiredFields) {
    if (requiredField.value === "") {
      showError(requiredField);
    } else {
      hideError(requiredField);
    }
  }
});
