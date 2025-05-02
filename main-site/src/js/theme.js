function toggleTheme() {
    const root = document.documentElement;
    const currentBg = getComputedStyle(root)
        .getPropertyValue("--background-color")
        .trim();
    const currentFg = getComputedStyle(root)
        .getPropertyValue("--foreground-color")
        .trim();

    // Check if dark mode is active and toggle
    if (currentBg === "#1e2021") {
        root.style.setProperty("--background-color", "#ebdbb2");
        root.style.setProperty("--foreground-color", "#1e2021");
        localStorage.setItem("theme", "light");
    } else {
        root.style.setProperty("--background-color", "#1e2021");
        root.style.setProperty("--foreground-color", "#ebdbb2");
        localStorage.setItem("theme", "dark");
    }
}

// Load from localStorage
function loadTheme() {
    const root = document.documentElement;
    const theme = localStorage.getItem("theme");

    // Default to dark theme if no theme is saved
    if (theme === "dark" || theme === null) {
        root.style.setProperty("--background-color", "#1e2021");
        root.style.setProperty("--foreground-color", "#ebdbb2");
    } else {
        root.style.setProperty("--background-color", "#ebdbb2");
        root.style.setProperty("--foreground-color", "#1e2021");
    }
}

// Call on page load
document.addEventListener("DOMContentLoaded", loadTheme);
