// JavaScript – Font size changer
// The following exercise contains the following subjects:
// ● DOM
// Instructions
// Create a webpage that has some text and two buttons with ‘+’
// and ‘-‘ Clicking the ‘+’ button should increase the text’s font-size
// and clicking the ‘-‘ should decrease it.
// Limit the font size to be between 6px and 100px.

const text = document.querySelector(".text");

const controlUp = document.querySelector("._increase");
const controlDown = document.querySelector("._decrease");
let fontSize = 32;

controlUp.addEventListener("click", () => {
  if (fontSize + 5 < 100) fontSize += 5;
  text.style.fontSize = fontSize + "px";
});
controlDown.addEventListener("click", () => {
  if (fontSize - 5 > 6) fontSize -= 5;
  text.style.fontSize = fontSize + "px";
});
