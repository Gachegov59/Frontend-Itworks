// JavaScript – Multiple inputs copy
// The following exercise contains the following subjects:
// ● events
// Instructions
// Many times an application needs to verify the account by
// sending a verification code by text message.
// Let's create functionality that enables the user to paste the
// verification code to the input fields.

// Features:
// 1. The user is allowed to type the values manually. After
// each value is inserted, the next input will be focused.

// 2. The user is allowed to paste the verification code.
// 3. An extra challenge will be to auto submit the form once all
// inputs all populated.
// Things to think about:
// What happens if the user pastes only 3 digits and there are
// 6 inputs to fill out.

// Here is an example.
// Things to help you:
// Google “paste event” to understand how to listen to a
// paste event.
// Google “clipboardData” to find out how to get the value of
// a paste event.

const form = document.querySelector(".form");
const validateInputs = document.querySelectorAll(".validate-input");
const btnSubmit = document.querySelector(".btn-submit");
const btnClear = document.querySelector(".btn-clear");

checkInputsOnFull();

function checkInputsOnFull() {
  const allInputsOn = [...validateInputs].every(
    (input) => input.value.length > 0
  );
  if (allInputsOn) {
    form.submit();
    btnSubmit.disabled = false;
  } else btnSubmit.disabled = true;
}

function inputStep() {
  for (let i = 0; i < validateInputs.length; i++) {
    if (validateInputs[i].value.length > 0 && i < validateInputs.length - 1) {
      validateInputs[i + 1].disabled = false;
      validateInputs[i].nextElementSibling.focus();
    } else {
      if (i < validateInputs.length - 1) {
        validateInputs[i + 1].disabled = true;
      }
    }
  }
  checkInputsOnFull();
}

// Listeners
form.addEventListener("keyup", (e) => {
  if (e.keyCode === 8 && e.target.id !== "input1") {
    e.target.previousElementSibling.focus();
    return;
  }
  inputStep();
});

form.addEventListener("paste", (e) => {
  e.preventDefault();
  const pastData = e.clipboardData.getData("text");
  for (let i = 0; i < validateInputs.length; i++) {
    validateInputs[i].value = pastData.charAt(i);
  }
  inputStep();
});

//BTNS
btnSubmit.addEventListener("click", (e) => {
  form.submit();
});

btnClear.addEventListener("click", (e) => {
  validateInputs.forEach((input) => (input.value = ""));
});
