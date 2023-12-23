let isLightTheme = false;

function toggleTheme() {
  isLightTheme = !isLightTheme;
  document.body.setAttribute("data-theme", isLightTheme ? "light" : "dark");
}

const sun = document.getElementById("sun");

sun.checked = isLightTheme;

sun.addEventListener("change", toggleTheme);
