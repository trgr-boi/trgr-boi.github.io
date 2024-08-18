(function () {
    'use strict';

    var outputDiv = document.getElementById('output'),
        inputField = document.getElementById('command-input'),
        currentDirectory = '/';
    var currentAudio = null;
    var commandHistory = []; // Array to store the command history
    var historyIndex = -1; // Index to track the current position in the command history

    
// Define an array of songs with index numbers
    var songs = [
        { index: 1, title: 'Subliminal - volca modular jam #1', file: '1.mp3', info: "Jam with the Korg Volca Modulair I make ar 2 a.m.<br><br> Links will folow when uploaded." },
        { index: 2, title: 'Subliminal - Metaphysical Roadtrip #1', file: '2.mp3', info: "Intro for a upcoming album. It will take you on a journey trough sound design and experimentation of frequenties. <br> Testlink of another album I made: <br><br> Spotify: <br> https://open.spotify.com/album/2nXer5DOFz6nrJKkOOax5y?si=9EGkgiE2QdapyP7rPmetqQ <br><br> soundcloud: <br> https://soundcloud.com/trigger_boi/sets/primal-instincts <br><br> Other links..." },
        { index: 3, title: 'Subliminal - Planetary Decent', file: '3.mp3', info: 'A song of my jungle set I made for a live performance at a vinyl convention organized by a friend of mine. <br><br> Links will folow when uploaded.'},
        { index: 4, title: 'Subliminal - Subterranean Pulse', file: '4.mp3', info: 'A song of my jungle set I made for a live performance at a vinyl convention organized by a friend of mine. <br><br> Links will folow when uploaded.'},
        { index: 5, title: 'Who is Subliminal?', file: 'who-is.mp3', info: 'Audio for the promotional video. Yet to be released...<br><br> Links will folow when uploaded.',}
    ];
    
 // Set focus to the input field by clicking anywhere
    document.body.addEventListener('click', function() {
        inputField.focus();
    });

 // Set focus to the input field on load
    window.addEventListener('DOMContentLoaded', function () {
        inputField.focus();
    });
    
// Links 'enterkey' to execute command
    inputField.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            var command = inputField.value.trim();
            inputField.value = '';
            executeCommand(command);
        } else
        if (event.key === 'ArrowUp') {
            // Navigate to the previous command in history
            navigateCommandHistory(-1);
        } else 
        if (event.key === 'ArrowDown') {
            // Navigate to the next command in history
            navigateCommandHistory(1);
        }
    });

// Commands
    function executeCommand(command) {
        // Echo of typed command
        appendOutput('>guest/~terminal.OS//: ' + command + '<br>', 'color2');
        
        // Add the command to the history
        commandHistory.push(command);
        historyIndex = commandHistory.length;
        
        // commands & reactions
        if (command === 'help') {
            showHelp();
        } else 
        if (command === 'q') {
            window.location.href = 'index.html';
        } else 
        if (command === 'clear') {
            clearOutput();
        } else 
        if (command === 'ls') {
            showFileTree();
        } else 
        if (command.startsWith('p')) {
            var songIndex = parseInt(command.split(' ')[1]); // Extract song index
            if (!isNaN(songIndex)) {
            playAudio(songIndex); // Pass song index to playAudio function
            } else {
            appendOutput("Invalid song index.<br>", 'color1');
        }
        } else
            
        if (command.startsWith('i')) {
            var songIndex = parseInt(command.split(' ')[1]); // Extract song index
            if (!isNaN(songIndex)) {
                showInfo(songIndex); // Pass song index to showTextIndex function
            } else {
                appendOutput("Invalid song index.<br>", 'color1');
            }
        } else
            
        if (command === 's') {
            stopAudio();
        } else
        if (command === 'np') {
            showNowPlaying();
        } else
        {
            // Unknown command message
            appendOutput("Unknown command: '" + command + "'.<br>Type '");
            appendOutput("help", 'color1');
            appendOutput("' for available commands.<br>");
        }
    }
    
     function navigateCommandHistory(offset) {
        var newIndex = historyIndex + offset;
        if (newIndex >= 0 && newIndex < commandHistory.length) {
            historyIndex = newIndex;
            inputField.value = commandHistory[historyIndex];
        }
    }
    
    function showHelp() {
        // Display help information
        appendOutput('Available commands:<br>');
        appendOutput('ls', 'color1');
        appendOutput(' - Shows you all the songs.<br>');
        appendOutput('i [song]', 'color1');
        appendOutput(' - Shows info of the song.<br>');
        appendOutput('p [song]', 'color1');
        appendOutput(' - Play the specified song.<br>');
        appendOutput('s', 'color1');
        appendOutput(' - stop the song.<br>');
        appendOutput('np', 'color1');
        appendOutput(' - show the current song.<br>');
        appendOutput('q', 'color1');
        appendOutput(' - quit music application.<br>');
        appendOutput('help', 'color1');
        appendOutput(' - You still know how to use this.<br>');
        appendOutput('clear', 'color1');
        appendOutput(' - clear the terminal.<br>')
        // Add more help messages for other commands as needed
    }
    
    function showFileTree() {
       // Display the list of songs with index numbers
        appendOutput('Use ')
        appendOutput('RED number ', 'color1')
        appendOutput('to play selected song.<br><br>')
        appendOutput('Song list:<br>');
        songs.forEach(function(song) {
        appendOutput(song.index + ')', 'color1');
        appendOutput(' ' + song.title + '<br>')
    });
    }
    
    function showInfo(songIndex) {
    var selectedSong = songs.find(function(song) {
        return song.index === songIndex;
    });
    if (selectedSong) {
        appendOutput("Info for ")
        appendOutput(selectedSong.title + ": <br><br>", 'color1');
        appendOutput(selectedSong.info + "<br><br> Copy and paste link in new window <br>");
    } else {
        appendOutput("Song with index " + songIndex + " not found.<br>", 'color1');
    }
}
    
   function playAudio(songIndex) {
    // Play song
    if (currentAudio) {
        currentAudio.pause(); // Pause the currently playing audio
    }
    var selectedSong = songs.find(function(song) {
        return song.index === songIndex;
    });
    if (selectedSong) {
        appendOutput('Playing ' + selectedSong.title + "...<br>");
        appendOutput("Don't refresh terminal!<br>", 'color1');
        currentAudio = new Audio('src/audio/' + selectedSong.file);
        currentAudio.play();
    } else {
        appendOutput("Song with index " + songIndex + " not found.<br>", 'color1');
    }
}
    
    function stopAudio() {
        // Stop song
        if (currentAudio) {
            currentAudio.pause();
            appendOutput("Audio stopped.<br>", 'color1');
    }   else {
            appendOutput("No audio is currently playing.<br>", 'color1');
    }
}
    function showNowPlaying() {
    if (currentAudio && currentAudio.src) {
        var currentFileName = currentAudio.src.split('/').pop(); // Extract the file name
        var currentSong = songs.find(function(song) {
            return song.file === currentFileName;
        });
        if (currentSong) {
            appendOutput("Now playing: ", 'color1');
            appendOutput( currentSong.title + "<br>")
        } else {
            appendOutput("Unknown audio is currently playing.<br>", 'color1');
        }
    } else {
        appendOutput("No audio is currently playing.<br>", 'color1');
    }
}
    
    function clearOutput() {
        // Clears the content of the output div
        outputDiv.innerHTML = '';
    }

    function appendOutput(output, className) {
        outputDiv.innerHTML += '<span class="' + className + '">' + output + '</span>';
        outputDiv.scrollTop = outputDiv.scrollHeight;
    }
})();
