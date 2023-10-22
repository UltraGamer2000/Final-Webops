const button = document.getElementById("changeStyleButton");
const stylesheet = document.getElementById("stylesheet");
let isAlternateStyle = false;
button.addEventListener("click", function() {
  if (isAlternateStyle) {
    stylesheet.href = "webops.css";

  } else {
    stylesheet.href = "darkops.css";
  }
  isAlternateStyle = !isAlternateStyle; // Toggle between styles
});