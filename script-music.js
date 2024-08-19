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

    // MEDIA PLAYER
        function togglePlayPause() {
            if (audio.paused) {
                audio.play();
                playPauseButton.textContent = 'Pause';
            } else {
                audio.pause();
                playPauseButton.textContent = 'Play';
            }
        }

        function updateProgressBar() {
            if (audio.duration) {
                const percentage = (audio.currentTime / audio.duration) * 100;
                progressBar.style.width = `${percentage}%`;

                const minutes = Math.floor(audio.currentTime / 60);
                const seconds = Math.floor(audio.currentTime % 60);
                currentTimeElement.textContent = `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
            }
        }

        function setAudioTime(e) {
            const clickX = e.offsetX;
            const width = progressContainer.clientWidth;
            const duration = audio.duration;
            audio.currentTime = (clickX / width) * duration;
        }

        function updateDuration() {
            if (audio.duration) {
                const minutes = Math.floor(audio.duration / 60);
                const seconds = Math.floor(audio.duration % 60);
                durationElement.textContent = `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
            }
        }

        function changeVolume() {
            audio.volume = volumeSlider.value;
        }

        function playTrack(index, tracklist) {
            const songPath = `src/audio/${tracklist[index]}.mp3`; // Ensure this path is correct
            audio.src = songPath;
            audio.load(); // Load the new source
            audio.play(); // Play the song

            // Update the play/pause button text
            playPauseButton.textContent = 'Pause';

            // When the song ends, play the next one
            audio.onended = function() {
                if (index < tracklist.length - 1) {
                    playTrack(index + 1, tracklist); // Play the next track
                }
            };
        }

    // ALBUM LIST, TRACKLIST & ALBUM INFO
        document.querySelectorAll('.title').forEach(album => {
            album.addEventListener('click', function() {
                // Remove 'selected' class from any other album
                document.querySelectorAll('.album').forEach(a => a.classList.remove('selected'));

                // Add 'selected' class to the clicked album
                this.classList.add('selected');

                // Update the tracklist
                const tracklist = this.getAttribute('data-tracklist').split('<br>');
                const tracklistPlaceholder = document.getElementById('tracklist-placeholder');

                // Clear the current content
                tracklistPlaceholder.innerHTML = '';

                // Create an array to store track elements
                const tracks = [];

                // Create and append each track as a new paragraph with a click event to play the song
                tracklist.forEach((track, index) => {
                    const trackItem = document.createElement('p');
                    trackItem.className = 'tracklist-item';
                    trackItem.textContent = track;
                    tracklistPlaceholder.appendChild(trackItem);

                    // Store each track element
                    tracks.push(trackItem);

                    // Add click event to play the song
                    trackItem.addEventListener('click', function() {
                        playTrack(index, tracklist);
                    });
                });

                // Display album info in the album-info box
                const albumInfo = this.getAttribute('data-info') || "No information available for this album.";
                albumInfoPlaceholder.textContent = albumInfo;

                // Display the album name in the album-name element
                const albumName = this.textContent;
                albumNameElement.textContent = albumName;
            });
        });

    // Initialize audio player controls
        playPauseButton.addEventListener('click', togglePlayPause);
        audio.addEventListener('timeupdate', updateProgressBar);
        audio.addEventListener('loadedmetadata', updateDuration);
        progressContainer.addEventListener('click', setAudioTime);
        volumeSlider.addEventListener('input', changeVolume);
});

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

// CLOSE MUSIC/GO BACK
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