function commandsAzerty(command) {
    const parts = command.trim().split(/\s+/);
    const baseCommand = parts[0];
    const args = parts[1] || null;
    const index = parts[2] || null;

    console.log("base: " + baseCommand);
    console.log("args: " + args);
    console.log("index: " + index);

    if (command === "help -p") showHelpAzerty();
    else unknownCommand(command);
}

function showHelpAzerty() {
    appendOutput("You don't have any programs installed.<br>");
}

function suAzerty() {
    setUsername("azerty");
    correctPassword = "qwerty";
    loginPassword(correctPassword);
}
