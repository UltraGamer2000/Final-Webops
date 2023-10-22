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
arrayString = document.cookie;
array = JSON.parse(arrayString);
const arrayList = document.getElementById('finnaleee');
array.forEach(item => {
  const li = document.createElement('li');
  li.textContent = item;
  arrayList.appendChild(li);
});
document.cookie = JSON.stringify(array);

