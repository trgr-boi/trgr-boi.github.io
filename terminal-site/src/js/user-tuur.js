function commandsTuur(command) {
    const parts = command.trim().split(/\s+/);
    const baseCommand = parts[0];
    const args = parts[1] || null;
    const index = parts[2] || null;

    console.log("base: " + baseCommand);
    console.log("args: " + args);
    console.log("index: " + index);

    if (command === "help -p") showHelpTuur();
    else unknownCommand(command);
}

function showHelpTuur() {
    appendOutput("test succesfull!<br>");
}
