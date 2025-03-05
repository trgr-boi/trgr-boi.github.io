function commandsAzerty(command) {
    if (command === "help -p") showHelpAzerty();
    else unknownCommand(command);
}

function showHelpAzerty() {
    appendOutput("You don't have any programs installed.<br>");
}
