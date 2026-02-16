// theme.js

const html = document.documentElement;
const toggleBtn = document.getElementById("themeToggle");

// Apply saved or system theme immediately
(function () {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme) {
    html.setAttribute("data-bs-theme", savedTheme);
  } else {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    html.setAttribute("data-bs-theme", prefersDark ? "dark" : "light");
  }
})();

// Toggle when button is clicked
document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("themeToggle");

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      const currentTheme = html.getAttribute("data-bs-theme");
      const newTheme = currentTheme === "dark" ? "light" : "dark";

      html.setAttribute("data-bs-theme", newTheme);
      localStorage.setItem("theme", newTheme);
    });
  }
});
