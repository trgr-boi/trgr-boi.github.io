function commandsAzerty(command) {
    const parts = command.trim().split(/\s+/);
    const baseCommand = parts[0];
    const args = parts[1] || null;
    const index = parts[2] || null;

    console.log("base: " + baseCommand);
    console.log("args: " + args);
    console.log("index: " + index);

    if (command === "help -p") showHelpAzerty();
    else if (command.startsWith("mail")) commandsMail(command);
    else if (command === "ls") showFilesAzerty();
    else if (baseCommand === "cat") concatAzerty(args);
    else unknownCommand(command);
}

function showHelpAzerty() {
    appendOutput("Available commands:<br>");
    appendOutput("ls", "color1");
    appendOutput(" - show the files<br>");
    appendOutput("cat <nameFile>", "color1");
    appendOutput(" - print a file<br>");
}

async function showFilesAzerty() {
    const masterData = await fetchJSON("src/json/files.json");
    for (let i = 0; i < masterData.azerty.length; i++)
        appendOutput(masterData.azerty[i].name + "<br>");
}

async function concatAzerty(args) {
    const masterData = await fetchJSON("src/json/files.json");
    let i = getIndexAzerty(args);
    console.log("index file: " + i);

    if (i === -1 || masterData.azerty[i] === undefined) {
        return; // Stop execution if the index is invalid
    }

    appendOutput(masterData.azerty[i].text + "<br><br>");
}

function getIndexAzerty(filename) {
    switch (filename) {
        case "readme.txt":
            return 0;
        case "test.txt":
            return 1;
        case "no.pdf":
            return 2;
        default:
            appendOutput("file does not exist...<br>");
            return -1;
    }
}
