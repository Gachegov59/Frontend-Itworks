const input = document.querySelector(".input");
const btn = document.querySelector(".btn");
const colorPicker = document.querySelector(".colorPicker");

// this function for valid hex color throught regex string -> return boolean
function isValidHexColor(color) {
  const regex = /^#([0-9A-F]{3}){1,2}$/i;
  return regex.test(color);
}

// This event listener on input for UX showing how this going
input.addEventListener("input", (event) => {
  document.body.style.backgroundColor = "";
  const isValid = isValidHexColor(event.target.value);
  if (isValid) {
    input.classList.add("isValid");
    input.classList.remove("isNotValid");
  } else {
    input.classList.add("isNotValid");
    input.classList.remove("isValid");
  }
});


// This listener on button for use function isValidHexColor and color body if it valid
btn.addEventListener("click", (event) => {
  event.preventDefault();
  if (isValidHexColor(input.value))
    document.body.style.backgroundColor = input.value;
  else alert("Please enter  valid hex color code");
});

// This listener for input type color
colorPicker.addEventListener("input", (event) => {
    input.value = event.target.value;
})