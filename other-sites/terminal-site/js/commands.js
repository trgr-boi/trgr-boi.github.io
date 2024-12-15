const { appendHandler } = require("jsdom/lib/jsdom/living/helpers/create-event-accessor");

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
    appendOutput('This is a place where I will place my mark.<br><br>');
    appendOutput('There is something about the simplicity of text. Only Text. The essentialism in displaying data. Even graphics are made with text elements. A conversion from visual perception without dataloss caused by imagination.<br>');
    appendOutput('Or is language the purest form of imagination?<br><br>');
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
