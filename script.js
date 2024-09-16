// script.js

function updateText() {
  const input = document.getElementById("inputText").value;
  document.getElementById("displayText").querySelector("p").textContent = input;
}
