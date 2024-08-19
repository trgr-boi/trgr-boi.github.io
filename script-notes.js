document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('audio-element');
    const playPauseButton = document.getElementById('play-pause');
    const progressBar = document.getElementById('progress-bar');
    const progressContainer = document.querySelector('.progress-container');
    const currentTimeElement = document.getElementById('current-time');
    const durationElement = document.getElementById('duration');
    const volumeSlider = document.getElementById('volume-slider');
    const albumInfoBox = document.getElementById('album-info');
    const albumInfoPlaceholder = document.getElementById('album-info-placeholder');
    const albumNameElement = document.getElementById('album-name'); // Get the album name element

    

    // ALBUM LIST, TRACKLIST & ALBUM INFO
        
    
});

// MENUS
    // ABOUT MENU
        document.addEventListener('DOMContentLoaded', function() {
            const storeButton = document.querySelector('a[href="about-but"]'); // Target the "stream" button
            const storePopup = document.getElementById('about-popup');
            const closePopupButton = document.getElementById('close-about-popup');

            // Function to show the popup
            function showPopup() {
                storePopup.style.display = 'flex';
            }

            // Function to hide the popup
            function hidePopup() {
                storePopup.style.display = 'none';
            }

            // Add event listener to the "Store" button
            storeButton.addEventListener('click', function(event) {
                event.preventDefault(); // Prevent the default anchor behavior
                showPopup();
            });

            // Add event listener to the close button
            closePopupButton.addEventListener('click', hidePopup);

            // Close the popup when clicking outside of the popup content
            storePopup.addEventListener('click', function(event) {
                if (event.target === storePopup) {
                    hidePopup();
                }
            });
        });

    // STREAMING MENU
        document.addEventListener('DOMContentLoaded', function() {
            const storeButton = document.querySelector('a[href="stream-but"]'); // Target the "stream" button
            const storePopup = document.getElementById('stream-popup');
            const closePopupButton = document.getElementById('close-stream-popup');

            // Function to show the popup
            function showPopup() {
                storePopup.style.display = 'flex';
            }

            // Function to hide the popup
            function hidePopup() {
                storePopup.style.display = 'none';
            }

            // Add event listener to the "Store" button
            storeButton.addEventListener('click', function(event) {
                event.preventDefault(); // Prevent the default anchor behavior
                showPopup();
            });

            // Add event listener to the close button
            closePopupButton.addEventListener('click', hidePopup);

            // Close the popup when clicking outside of the popup content
            storePopup.addEventListener('click', function(event) {
                if (event.target === storePopup) {
                    hidePopup();
                }
            });
        });

    // STORE MENU
        document.addEventListener('DOMContentLoaded', function() {
            const storeButton = document.querySelector('a[href="store-but"]'); // Target the "Store" button
            const storePopup = document.getElementById('store-popup');
            const closePopupButton = document.getElementById('close-popup');

            // Function to show the popup
            function showPopup() {
                storePopup.style.display = 'flex';
            }

            // Function to hide the popup
            function hidePopup() {
                storePopup.style.display = 'none';
            }

            // Add event listener to the "Store" button
            storeButton.addEventListener('click', function(event) {
                event.preventDefault(); // Prevent the default anchor behavior
                showPopup();
            });

            // Add event listener to the close button
            closePopupButton.addEventListener('click', hidePopup);

            // Close the popup when clicking outside of the popup content
            storePopup.addEventListener('click', function(event) {
                if (event.target === storePopup) {
                    hidePopup();
                }
            });
        });

    // CLOSE /GO BACK
        document.addEventListener('DOMContentLoaded', function() {
            const storeButton = document.querySelector('a[href="quit-but"]'); // Target the "Store" button
            const storePopup = document.getElementById('quit-popup');
            const closePopupButton = document.getElementById('close-quit-popup');

            // Function to show the popup
            function showPopup() {
                storePopup.style.display = 'flex';
            }

            // Function to hide the popup
            function hidePopup() {
                storePopup.style.display = 'none';
            }

            // Add event listener to the "Store" button
            storeButton.addEventListener('click', function(event) {
                event.preventDefault(); // Prevent the default anchor behavior
                showPopup();
            });

            // Add event listener to the close button
            closePopupButton.addEventListener('click', hidePopup);

            // Close the popup when clicking outside of the popup content
            storePopup.addEventListener('click', function(event) {
                if (event.target === storePopup) {
                    hidePopup();
                }
            });
        });