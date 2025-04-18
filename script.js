//your JS code here. If required.
const toggleButton = document.getElementById("toggle-theme");
const currentTheme = localStorage.getItem("theme");

// Apply saved theme on page load
if (currentTheme === "dark") {
  document.body.classList.add("dark-mode");
} else {
  document.body.classList.add("light-mode");
}

// Toggle theme on button click
toggleButton.addEventListener("click", () => {
  if (document.body.classList.contains("dark-mode")) {
    document.body.classList.replace("dark-mode", "light-mode");
    localStorage.setItem("theme", "light");
  } else {
    document.body.classList.replace("light-mode", "dark-mode");
    localStorage.setItem("theme", "dark");
  }
});
