(function () {
    'use strict';

    var outputDiv = document.getElementById('output'),
        inputField = document.getElementById('command-input');
    var commandHistory = []; // Array to store the command history
    var historyIndex = -1; // Index to track the current position in the command history

    document.body.addEventListener('click', function() {
        var textarea = document.getElementById('command-input');
        textarea.focus(); // Set focus to the textarea
    });
    window.addEventListener('DOMContentLoaded', function () {
        var textarea = document.getElementById('command-input');
        textarea.focus(); // Set focus to the textarea
    });
    
    inputField.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            var command = inputField.value;
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

   function executeCommand(command) {
        {
        // Echo of typed command
        appendOutput('>guest/~terminal.OS//: ' + command + '<br>', 'color2');
        }
       
        // Add the command to the history
        commandHistory.push(command);
        historyIndex = commandHistory.length;
       
       // commands & reactions
        if (command === 'help') {
            showHelp();
        } else
        if (command === 'about') {
            showAbout();
        } else
        if (command === 'whoami') {
            showWhoami();
        } else 
        if (command === 'clear'){
            clearOutput();
        } else
        if (command === 'open music'){
            window.location.href = 'music.html';
        } else
        if (command === 'open old-music'){
            window.location.href = 'old-music.html';
        } else
         if (command === 'files') {
            showFiles(); //make link later
        } else
        if (command === 'depo'){
            window.open('https://github.com/Trigger-BOI');
        } else
        if (command === 'liefje'){
            showLiefje();
        } else
        if (command === 'suki'){
            showSuki();
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
        appendOutput('about', 'color1');
        appendOutput(' - find out more about this.<br>');
        appendOutput('whoami', 'color1');
        appendOutput(' - Who even am i?<br>');
        appendOutput('depo', 'color1');
        appendOutput(' - go to Github page.<br>');
        appendOutput('open music', 'color1');
        appendOutput(' - listen to my music.<br>');
        appendOutput('files', 'color1');
        appendOutput(' - browse local files.<br>');
        appendOutput('help', 'color1');
        appendOutput(' - You clearly know how to use this.<br>');
        appendOutput('clear', 'color1');
        appendOutput(' - clear the terminal.<br>')
        // Add more help messages for other commands as needed
    }
    function showAbout() {
        appendOutput('Welcome to the terminal.<br>');
        appendOutput('This is a place where I will use to place my mark.<br><br>');
        appendOutput('right now, there is only some music to find. This is there purely for testing reasons. ')
        appendOutput('Your are only here for test reasons...<br>', 'color1')
        appendOutput('Explore further.<br>')
    }
    function showWhoami() {
        appendOutput("Are you asking me or yourself?<br><br>")
        appendOutput("I am a simple living and learning creature.<br>")
        appendOutput("I go by the name TRGR on here. <br><br>")
        appendOutput("I don't fully know about it all... <br>")
    }
    function showFiles() {
        appendOutput('Files are still uploading...<br>Try again later.<br>')
    }
    function clearOutput() {
        outputDiv.innerHTML = ''; // Clears the content of the output div
    }

    function appendOutput(output, className) {
        outputDiv.innerHTML += '<span class="' + className + '">' + output + '</span>';
        outputDiv.scrollTop = outputDiv.scrollHeight;
    }
    
    function showLiefje() {
        appendOutput('⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣠⣤⣤⣤⣤⣤⣤⣤⣤⣀⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀<br>⠀⠀⠀⠀⠀⠀⠀⠀⢀⣤⠶⠟⠛⠛⠉⠉⠉⠁⠀⠀⠈⠉⠉⠙⠛⠿⢶⣤⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀<br>⠀⠀⠀⠀⠀⠀⣠⠖⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠛⢷⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀<br>⠀⠀⠀⠀⢠⡾⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⢷⣄⠀⠀⠀⠀⠀⢀⣀⠀⠀⠀⠀<br>⠀⠀⠀⣠⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣀⣀⠀⠀⠀⠹⣧⡀⠀⠀⠀⡏⠉⠙⠋⢹⡆<br>⠀⠀⢠⡿⠀⠀⠀⠀⠀⠀⠀⢀⣀⣀⣀⣀⠀⠀⠀⠀⠀⠀⠀⠀⣠⠚⠉⠉⠛⠿⣦⡀⠀⠸⣷⡀⠀⠀⠹⣄⠀⠠⡹⠃<br>⠀⢀⣿⠃⠀⠀⠀⠀⣠⣶⠾⠟⠛⠉⠉⠛⠿⣶⣄⠀⠀⠀⠀⣰⠃⢀⣠⣤⣄⠀⠈⢻⣦⠀⢻⣧⠀⠀⠀⠈⠓⠋⠀⠀<br>⠀⢸⣿⠀⠀⠀⣠⣾⠋⠁⠀⠀⢀⣠⣤⣤⣤⣈⠙⣷⣄⠀⢠⣏⣶⣿⣿⣿⣿⣿⣦⠀⢻⣧⠘⣿⢀⢸⡛⠛⢲⠀⠀⠀<br>⠀⣾⡇⠀⠀⢠⡿⠁⠀⠀⣠⣾⡿⢿⣿⣿⣿⣿⣷⣌⢿⣆⢸⣿⡋⠉⢉⣿⣿⣿⣿⣧⠈⣿⠀⣿⣿⠀⠹⠶⠋⠀⠀⠀<br>⠈⡟⣿⠀⠀⢸⠇⠀⢀⣼⣄⠈⠀⣸⣿⣿⣿⣿⣿⣿⡎⣿⣿⣿⣿⣶⣿⣻⣿⣿⣿⣿⣤⣿⢀⣿⣿⠀⠀⠀⠀⠀⠀⠀<br>⠀⢷⢹⡆⠀⢸⡄⠀⣾⣿⣿⣿⣿⣿⣩⣿⣿⣿⣿⣿⣇⣿⢹⣿⣿⣿⣿⣿⣿⣿⣟⣿⣿⠏⣸⢧⠏⠀⠀⠀⠀⠀⠀⠀<br>⠀⠈⣇⢳⡀⠈⢧⠐⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠈⢿⣿⣿⣿⣿⣿⣿⣿⣿⠏⢠⢁⡞⠀⠀⠀⠀⠀⠀⠀⠀<br>⠀⠀⠈⢎⠃⠀⠈⠳⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣾⠟⠁⠀⠀⠈⠻⣿⣿⣿⣿⡿⠟⠁⠀⣠⠎⠀⠀⠀⠀⠀⠀⠀⠀⠀<br>⠀⠀⠀⠈⠳⣄⠀⠀⠈⠙⡻⠿⢿⣿⡿⠿⠟⠋⠁⠀⠀⠀⠀⠀⠀⠀⠈⠉⠃⣀⡀⣰⠞⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀<br>⠀⠀⠀⣀⡤⠬⣷⣄⡲⣤⣈⠀⠈⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣠⡴⢛⡵⠚⠁⠀⢀⣠⣤⣀⡀⠀⠀⠀⠀⠀⠀<br>⠀⠀⠸⣇⠀⠀⠀⢻⣿⠒⠭⣟⣷⢶⣤⣤⣤⣤⣤⣤⣤⣤⣶⢾⣟⠯⠗⠊⠁⠀⠀⠀⣾⠟⠁⠀⢘⣿⠀⠀⠀⠀⠀⠀<br>⠀⠀⠀⢹⣧⠀⠀⠈⣿⡄⠀⠀⠈⠉⠛⠛⠛⠛⠛⠒⠋⠛⠉⠉⠀⠀⠀⠀⠀⠀⠀⢸⡿⠀⠀⢠⣿⠏⠀⠀⠀⠀⠀⠀<br>⠀⠀⠀⣠⣿⠇⠀⠀⠙⠛⠛⠒⠒⠛⠛⠛⠻⠿⢷⡢⣤⣔⡶⠿⠟⠛⠛⠛⠻⠿⠽⠟⠁⠀⠀⢺⡿⡄⠀⠀⠀⠀⠀⠀<br>⠀⠀⢰⣿⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣾⡁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⣿⡀⠀⠀⠀⠀⠀<br>⠀⠀⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠙⠛⠻⢿⣿⠒⠲⠛⠙⠲⠦⢼⣿⡿⠟⠛⠃⠀⠀⠀⠀⠀⠀⠀⢸⣇⡇⠀⠀⠀⠀⠀<br>⠀⠀⠹⠿⣧⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⠇⠀⠀⠀⠀⠀⢸⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⡾⡻⠃⠀⠀⠀⠀⠀<br>⠀⠀⠀⠀⠈⠻⢦⣀⠀⠀⠀⠀⠀⠀⢀⡾⡿⠀⠀⠀⠀⠀⠀⠘⣿⣆⠀⠀⠀⠀⠀⠀⢀⣠⣴⢯⠞⠀⠀⠀⠀⠀⠀⠀<br>⠀⠀⠀⠀⠀⠀⠀⠉⠛⠳⠶⠶⠶⣖⡿⠚⠁⠀⠀⠀⠀⠀⠀⠀⠘⠮⣷⣶⡤⡤⠴⠾⠟⠋⠚⠁⠀⠀⠀⠀⠀⠀⠀⠀<br>⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀<br>')
    }

    function showSuki() {
        appendOutput('Hey liefje<br><br>Ik zie jou zo suuuuper graag. Sorry dat dit er niet van het begin <br>in verstopt zat voor jou.<br>')
        appendOutput('Dankje voor mij leukde ideetjes the geven voor dingen te verstoppen :)<br>I love YOU <333<br><br>')
        appendOutput('Veel liede,<br>Jouw liefje<br><br>')
    }
})();
