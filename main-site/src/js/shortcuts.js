document.addEventListener("DOMContentLoaded", function () {
    document.addEventListener("keydown", function (event) {
        if (event.key === "n" || event.key === "N") {
            const toggleButton = document.getElementById("toggleDisplayBtn");
            toggleButton.click();
        } else if (event.key === "t" || event.key === "T") {
            toggleTheme();
        }
    });
});
