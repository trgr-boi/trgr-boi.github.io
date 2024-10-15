// MENU SWITCH
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.menu-links');
    const closeBtn = document.querySelector('.close-btn');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
    closeBtn.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });

    // Clicking outside the menu
    document.addEventListener('click', (event) => {
        const isClickInsideMenu = navLinks.contains(event.target);
        const isClickOnHamburger = hamburger.contains(event.target);

        // If the click is not inside the menu and not on the hamburger icon, close the menu
        if (!isClickInsideMenu && !isClickOnHamburger) {
            navLinks.classList.remove('active');
        }
    });