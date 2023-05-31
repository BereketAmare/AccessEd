const themeToggleButton = document.getElementById("theme-toggle");

const toggleTheme = () => {
  document.body.classList.toggle("dark-mode");
};

themeToggleButton.addEventListener("click", toggleTheme);
