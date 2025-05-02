document.addEventListener("DOMContentLoaded", function () {
    const toggleElement = document.querySelector("nav");
    const toggleButton = document.getElementById("toggleDisplayBtn");
    const navLinks = toggleElement.querySelectorAll("a");

    // Show the menu by default if the viewport width is larger than 820px
    if (window.innerWidth >= 820) {
        toggleElement.style.display = "block";
    } else {
        toggleElement.style.display = "none";
    }

    toggleButton.addEventListener("click", function () {
        if (
            toggleElement.style.display === "none" ||
            toggleElement.style.display === ""
        ) {
            toggleElement.style.display = "block";
        } else {
            toggleElement.style.display = "none";
        }
    });

    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            if (window.innerWidth < 820) {
                toggleElement.style.display = "none";
            }
        });
    });

    // Adjust the display property on window resize
    window.addEventListener("resize", function () {
        if (window.innerWidth >= 820) {
            toggleElement.style.display = "block";
        } else {
            toggleElement.style.display = "none";
        }
    });
});
