function handleCommand(inputCommand) {
    
    const command = inputCommand.toLowerCase();

    if (command === 'help') { showHelp(); }
    else if (command === 'about') { showAbout(); } 
    else if (command === 'whoami') { showWhoami(); } 
    else if (command === 'clear') { clearOutput(); } 
    else if (command === 'music') { window.location.href = 'music.html'; } 
    else if (command === 'files') { showFiles(); } 
    else if (command === 'depo') { window.open('https://github.com/trgr-boi'); } 
    else if (command === 'su tuur') { // LOGIN TUUR
        if (username === 'tuur') { appendOutput("Already logged in.<br>") } 
        else { suTuur(); }
    } 
    else if (command === 'su liefje') { // LOGIN LIEFJE
        if (username === 'liefje') { appendOutput("Already logged in.<br>") } 
        else { suLiefje(); }
    } 
    else if (command === 'exit') {  /* LOGOUT */ suLogout(); } 
    else if (username === 'tuur') { commandsTuur(command); } 
    else if (username === 'liefje') { commandsLiefje(command); } 
    else { unknownCommand(command); }
}

function unknownCommand(command) {
    appendOutput("Unknown command: " + command + "<br>Type '");
    appendOutput("help", 'color1');
    appendOutput("' for available commands.<br>"); 
}

function showHelp() {
    appendOutput('Available commands:<br><br>');
    appendOutput('about', 'color1');
    appendOutput(' - find out more about this.<br>');
    appendOutput('whoami', 'color1');
    appendOutput(' - Who even am I?<br>');
    appendOutput('depo', 'color1');
    appendOutput(' - go to Github page.<br>');
    appendOutput('files', 'color1');
    appendOutput(' - look trough files.<br>');
    appendOutput('su [user]', 'color1');
    appendOutput(' - still in the making.<br><br>');
    appendOutput('help', 'color1');
    appendOutput(' - You clearly know how to use this.<br>');
    appendOutput('clear', 'color1');
    appendOutput(' - clear the terminal.<br>')
}

function showAbout() {
    appendOutput('Welcome to the terminal.<br>');
    appendOutput('This is a place where I will use to place my mark.<br><br>');
    appendOutput('Right now, there is only some music to find. This is there purely for testing reasons. ');
    appendOutput('You are only here for test reasons...<br>', 'color1');
    appendOutput('Explore further.<br>');
}

function showWhoami() {
    appendOutput("Are you asking me or yourself?<br><br>");
    appendOutput("I am a simple living and learning creature.<br>");
    appendOutput("I go by the name trgr on here. <br><br>");
    appendOutput("I don't fully know about it all... <br>");
}

function showFiles() {
    appendOutput('Files are still uploading...<br>Try again later.<br>');
}

function clearOutput() {
    outputDiv.innerHTML = '';
}
