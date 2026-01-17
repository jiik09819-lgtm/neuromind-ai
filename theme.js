// ===== Dark / Light Mode =====

const toggleBtn = document.getElementById("themeToggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  document.body.classList.toggle("dark-mode");

  const currentTheme = document.body.classList.contains("dark-mode")
    ? "dark"
    : "light";
  localStorage.setItem("neuroTheme", currentTheme);
});

// Load saved theme
function loadTheme() {
  const savedTheme = localStorage.getItem("neuroTheme");
  if (savedTheme) {
    document.body.classList.add(savedTheme === "dark" ? "dark-mode" : "light-mode");
  } else {
    document.body.classList.add("dark-mode");
  }
}

loadTheme();