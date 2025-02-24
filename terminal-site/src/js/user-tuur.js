function commandsTuur(command) {
    const parts = command.trim().split(/\s+/);
    const baseCommand = parts[0];
    const args = parts[1] || null;
    const index = parts[2] || null;

    if (command === "help -p") showHelpTuur();
    else if (command === "ls") showFilesTuur();
    else if (baseCommand === "cat") concatTuur(args);
    else unknownCommand(command);
}

function showHelpTuur() {
    appendOutput("test succesfull!<br>");
}

async function showFilesTuur() {
    const masterData = await fetchJSON("src/json/files.json");
    for (let i = 0; i < masterData.tuur.length; i++)
        appendOutput(masterData.tuur[i].name + "<br>");
}

async function concatTuur(args) {
    const masterData = await fetchJSON("src/json/files.json");
    let i = getIndexAzerty(args);
    console.log("index file: " + i);

    if (i === -1 || masterData.tuur[i] === undefined) {
        return; // Stop execution if the index is invalid
    }

    appendOutput(masterData.tuur[i].text + "<br><br>");
}

function getIndexTuur(filename) {
    switch (filename) {
        case "readme.txt":
            return 0;
        default:
            appendOutput("file does not exist...<br>");
            return -1;
    }
}
