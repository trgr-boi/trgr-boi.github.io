(function () {
    'use strict';

    var outputDiv = document.getElementById('output'),
        inputField = document.getElementById('command-input');
    var commandHistory = [];
    var historyIndex = -1;
    var awaitingPassword = false; // Track if the terminal is waiting for password input
    var currentCommand = ''; // Store the current command

    document.body.addEventListener('click', function() {
        var textarea = document.getElementById('command-input');
        textarea.focus(); // Set focus to the textarea        
    });
    window.addEventListener('DOMContentLoaded', function () {
        var textarea = document.getElementById('command-input');
        textarea.focus(); // Set focus to the textarea
        // Add starter text when the page loads
        appendOutput(
        `<pre class="color1">
 _____     _   _ _       _         _
|   __|_ _| |_| |_|_____|_|___ ___| |  ___ ___
|__   | | | . | | |     | |   | .'| |_| . |_ -|
|_____|___|___|_|_|_|_|_|_|_|_|__,|_|_|___|___|
</pre>`
    );
        appendOutput('<span>Welcome to Subliminal.OS. You are on the HOME page.<br>Type </span>');
        appendOutput('<span>help', 'color1');
        appendOutput(' to get started.</span><br><br>');
    });

    inputField.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            var command = inputField.value;
            inputField.value = '';
            if (awaitingPassword) {
                checkPassword(command); // Handle password input
            } else {
                executeCommand(command); // Handle regular commands
            }
        } else if (event.key === 'ArrowUp') {
            navigateCommandHistory(-1);
        } else if (event.key === 'ArrowDown') {
            navigateCommandHistory(1);
        }
    });

    
    // Commands
     function executeCommand(command) {

        appendOutput('>guest/~terminal.OS//: ' + command + '<br>', 'color2');
        commandHistory.push(command);
        historyIndex = commandHistory.length;

        if (command.toLowerCase() === 'help') {
            showHelp();
        } else if (command.toLowerCase() === 'about') {
            showAbout();
        } else if (command.toLowerCase() === 'whoami') {
            showWhoami();
        } else if (command.toLowerCase() === 'clear') {
            clearOutput();
        } else if (command.toLowerCase() === 'music') {
            window.location.href = 'music.html';
        } else if (command.toLowerCase() === 'files') {
            showFiles();
        } else if (command.toLowerCase() === 'depo') {
            window.open('https://github.com/Trigger-BOI');
        } else if (command.toLowerCase() === 'shutdown') {
            window.location.href = '../index.html';
        } else 
        
        // VOOR LIEFJE
        if (command.toLowerCase() === 'help -liefje') {
            appendOutput('Enter the password to access:<br><br>', 'color1');
            awaitingPassword = true;
            currentCommand = command;
        } else 
        if (command.toLowerCase() === 'mail') {
            showMail();
        } else if (command.toLowerCase() === 'mail -30/09') {
            showMail3();
        } else if (command.toLowerCase() === 'mail -23/09') {
            showMail1();
        } else if (command.toLowerCase() === 'mail -27/09') {
            showMail2();
        /* COPY FOR NEW MAIL
        } else if (command.toLowerCase() === 'mail -dd/mm') {
            showMailX();
        */
        } else if (command.toLowerCase() === 'liefje-zien') {
            showCountdown();
        } else 
        // IF NOT MATCHED
        {
            appendOutput("Unknown command: '" + command + "'.<br>Type '");
            appendOutput("help", 'color1');
            appendOutput("' for available commands.<br>");
        }
    }

    function checkPassword(password) {
        const correctPassword = "Miss-Phawa";
        if (password === correctPassword) {
            appendOutput('Access granted.<br><br>', 'color1');
            showHelpLiefje(); // Execute the command
        } else {
            appendOutput('Incorrect password. Access denied.<br><br>', 'color1');
        }
        awaitingPassword = false; // Reset the state
        currentCommand = ''; // Clear the current command
    }

    function navigateCommandHistory(offset) {
        var newIndex = historyIndex + offset;
        if (newIndex >= 0 && newIndex < commandHistory.length) {
            historyIndex = newIndex;
            inputField.value = commandHistory[historyIndex];
        }
    }

    function appendOutput(output, className) {
        outputDiv.innerHTML += '<span class="' + className + '">' + output + '</span>';
        outputDiv.scrollTop = outputDiv.scrollHeight;
    }
    
    function showHelp() {
        appendOutput('Available commands:<br>');
        appendOutput('about', 'color1');
        appendOutput(' - find out more about this.<br>');
        appendOutput('whoami', 'color1');
        appendOutput(' - Who even am I?<br>');
        appendOutput('depo', 'color1');
        appendOutput(' - go to Github page.<br><br>');
        appendOutput('files', 'color1');
        appendOutput(' - browse local files.<br><br>');
        appendOutput('help', 'color1');
        appendOutput(' - You clearly know how to use this.<br>');
        appendOutput('shutdown', 'color1');
        appendOutput(' - Shutdown the terminal.<br>');
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
        appendOutput("I go by the name TRGR on here. <br><br>");
        appendOutput("I don't fully know about it all... <br>");
    }

    function showFiles() {
        appendOutput('Files are still uploading...<br>Try again later.<br>');
    }
    
    function clearOutput() {
        outputDiv.innerHTML = ''; // Clears the content of the output div
    }

// VOOR LIEFJE
    function showHelpLiefje() {
        appendOutput('<< LIEFLE MODE ACTIVATED >><br><br>', 'color1')
        appendOutput("Available commands:<br>");
        appendOutput('liefje-zien', 'color1');
        appendOutput(' - Countdown until happiness.<br><br>');
        appendOutput('mail', 'color1');
        appendOutput(' - Personal mail client <br>');
        appendOutput('mail -[date] ', 'color1');
        appendOutput('- open mail &nbsp;&nbsp;║<br>');
        appendOutput('help -liefje', 'color1');
        appendOutput(' - Shows Liefje commands.<br>');


    }
    function showMail() {
        appendOutput('╔ Mail Inbox ════════════════╗<br>')
        appendOutput('╟────────────────────┬───────╢<br>');
        appendOutput('║ Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│ Date &nbsp;║<br>');
        appendOutput('╟────────────────────┼───────╢<br>');
        /* COPY NEXT FOR NEW MAIL - lengthe of name MAX 19 characters. IF SHORTER : add '&nbsp' for eatch space on right
        appendOutput('║ NAME │ ');
        appendOutput('dd/mm ', 'color1');
        appendOutput('║<br>');
        */
        appendOutput('║ Veel doen &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp │ ');
        appendOutput('30/09 ', 'color1');
        appendOutput('║<br>');
        appendOutput('║ Samen zijn &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp │ ');
        appendOutput('27/09 ', 'color1');
        appendOutput('║<br>')
        appendOutput('║ Ik mis jou zo hard │ ');
        appendOutput('23/09 ', 'color1');
        appendOutput('║<br>')
        appendOutput('╟────────────────────┴───────╢<br>');
        appendOutput('╚════════════════════════════╝<br>');
    }
    /* MAIL TEMPLATE
    function showMail1() {
        appendOutput('══ NAME ══<br><br>', 'color1');
        appendOutput('MAIL CONTENT<br><br>');
    }
    */
    function showMail3() {
        appendOutput('══ veel doen ══<br><br>', 'color1');
        appendOutput('Hey Liefje<br><br>');
        appendOutput('Ik weet dat je sterk alleen aan het staan bent en dat dat stadsspel een grote tegenslag was, maar ik hoop dat dit jou niet te veel tegenhoud om zulke dingen te blijven doen. Ik weet zeker dat je mensen gaat vinden dat wel voor jou engels willen spreken en waar de af en toe dingentjes mee gaat kunnen doen. Je gaat leuke bezigheden vinden zoals de potten maken en hopelijk daar mensen leren kennen met die zelfde interesse. Jij verdient dat!<br>');
        appendOutput('Ik wou jou ook gewoon nog eens zeggen dat ik jou super graag zie en dat gamen met jou heel leuk is :) Ik hou zo veel van jou en ga dat blijven doen <3<br><br>');
        appendOutput('Heel veel liefde<br>Jouw Liefje xxx')
    }
    function showMail2() {
        appendOutput('══ Samen zijn ══<br><br>', 'color1');
        appendOutput('Hey liefje<br><br>');
        appendOutput('Ik vind het leuk om samen met jou dingen te doen. Het allerliefste knuffel ik jou maar nu dat efjes niet meer gaat is het super leuk om met jou te bellen. <3<br>');
        appendOutput('Sorry dat ik gisteren tijdens dat jij Arcane aan het kijken was met andere dingen bezig was. Maar ik was dit aan het maken voor jou. En sorry dat ik al verder had gekeken. Ik kijk het graag opnieuw met jou.<br>');
        appendOutput('Bekijk dit maar regelmatig want ga hier vaak iets aan toevoegen :) Ik zie jou zo graag.<br><br>');
        appendOutput('Veel kusjes & liefde xxxx<br>Jouw liefje<br>')
    }
    function showMail1() {
        appendOutput('══ Ik mis jou zo hard ══<br><br>', 'color1');
        appendOutput('Hey liefje<br><br>');
        appendOutput('Ik ben jou echt heel veel te missen. Vandaag heel de dag aan jou denken en jou graag willen horen.<br> Ik ben zo blij dat jij mijn liefje bent weet niet aan wat ik jou heb verdient. jij bent een prachtig persoon en ik hoop dat jij voor altijd mijn liefje blijft.<br>');
        appendOutput('Ookal voelt het lang dat we elkaar niet gaan zien, tot snel. Jij bent voor altijd aanwezig in mijn hartje.<br><br>');
        appendOutput('Heel veel liefde<br>Jouw liefje <3<br>')
    }


    // countdown
    function showCountdown() {
        const targetDate = new Date(2024, 10, 8);
        const currentDate = new Date();
    
        // Calculate the difference in days
        const timeDiff = targetDate.getTime() - currentDate.getTime();
        const daysRemaining = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    
        if (daysRemaining <= 0) {
            appendOutput("The target date has already passed or is today!<br>");
        } else {
            appendOutput(`Nog ${daysRemaining} dagen en ik zie liefje!!!<br>`);
        }
    } 
    

})();
