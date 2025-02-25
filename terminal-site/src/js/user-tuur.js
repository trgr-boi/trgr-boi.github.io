function commandsTuur(command) {
    const parts = command.trim().split(/\s+/);
    const baseCommand = parts[0];
    const args = parts[1] || null;
    const index = parts[2] || null;

    if (command === "help -p") showHelpTuur();
    else unknownCommand(command);
}

function suTuur() {
    setUsername("tuur");
    correctPassword = "test";
    loginPassword(correctPassword);
}

function showHelpTuur() {
    appendOutput("test succesfull!<br>");
}
