async function showFiles() {
    const masterData = await fetchJSON("src/json/files.json");
    for (const file of masterData[username]) {
        let { name } = file;
        appendOutput(name + "<br>");
    }
}

async function concat(filename) {
    const masterData = await fetchJSON("src/json/files.json");
    for (const file of masterData[username]) {
        let { name } = file;
        if (name === filename) {
            let { text } = file;
            appendOutput(text + "<br>");
            break;
        }
    }
    appendOutput("File '" + filename + "' does not exist...<br>");
}
