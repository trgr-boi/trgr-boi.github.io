function handleCommand(inputCommand) {
    const command = inputCommand.toLowerCase();

    if (command.startsWith("su ")) {
        const user = command.split(" ")[1];
        su(user);
    } else if (command.startsWith("cat ")) {
        const file = command.split(" ")[1];
        concat(file);
    } else
        switch (command) {
            case "help":
                showHelp();
                break;
            case "about":
                showAbout();
                break;
            case "whoami":
                showWhoami();
                break;
            case "clear":
                clearOutput();
                break;
            case "shutdown":
                window.location.href = "../main-site/index.html";
                break;
            case "ls":
                showFiles();
                break;
            case "depo":
                window.open("https://github.com/trgr-boi");
                break;
            case "exit":
                suLogout();
                break;
            default:
                if (username === "tuur") commandsTuur(command);
                else if (username === "liefje") commandsLiefje(command);
                else if (username === "azerty") commandsAzerty(command);
                else unknownCommand(command);
                break;
        }
}

function unknownCommand(command) {
    appendOutput("Unknown command: " + command + "<br>Type '");
    appendOutput("help", "color1");
    appendOutput("' for available commands.<br>");
}

function showHelp() {
    appendOutput("Available commands:<br><br>");
    appendOutput("Showcase:<br> │ ");
    appendOutput("about", "color1");
    appendOutput(" - find out more about this.<br>│ ");
    appendOutput("whoami", "color1");
    appendOutput(" - Who even am I?<br>│ ");
    appendOutput("depo", "color1");
    appendOutput(" - go to Github page.<br>");
    appendOutput("Files:<br>│ ");
    appendOutput("ls", "color1");
    appendOutput(" - lists files in user directory.<br>│ ");
    appendOutput("cat [file]", "color1");
    appendOutput(" - prints the file.<br>");
    appendOutput("Users:<br>│ ");
    appendOutput("su [user]", "color1");
    appendOutput(" - still in the making.<br>│ ");
    appendOutput("exit", "color1");
    appendOutput(" - Log out of session.<br>");
    appendOutput("System:<br>│ ");
    appendOutput("help", "color1");
    appendOutput(" - You clearly know how to use this.<br>│ ");
    appendOutput("clear", "color1");
    appendOutput(" - clear the terminal.<br>│ ");
    appendOutput("shutdown", "color1");
    appendOutput(" - go back to main site.<br>");
}

function showAbout() {
    appendOutput("Welcome to the terminal.<br>");
    appendOutput("This is a place where I will place my mark.<br><br>");
    appendOutput(
        "There is something about the simplicity of text. Only Text. The essentialism in displaying data. Even graphics are made with text elements. A conversion from visual perception without dataloss caused by imagination.<br>"
    );
    appendOutput(
        "Or is text and therefor language the purest form of imagination?<br><br>"
    );
    appendOutput("You are only here for test reasons...<br>", "color1");
    appendOutput("Explore further.<br>");
}

function showWhoami() {
    appendOutput("Are you asking me or yourself?<br><br>");
}

function clearOutput() {
    outputDiv.innerHTML = "";
}
