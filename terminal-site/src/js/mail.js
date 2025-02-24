function commandsMail(command) {
    const parts = command.trim().split(/\s+/);
    const baseCommand = parts[0];
    const args = parts[1] || null;
    const index = parts[2] || null;

    console.log("baseCommand: " + baseCommand);
    console.log("arsg:" + args);
    console.log("user index: " + index);

    if (baseCommand === "mail" && args === null && index === null) {
        mailStart();
    } else if (args === "-h") {
        mailHelp();
    } else if (args === "-s") {
        mailShow(index - 1);
    } else {
        unknownCommand(command);
    }
}
// fetch JSON data
async function fetchJSON(fileName) {
    try {
        const response = await fetch(fileName);

        // check if the request was successful
        if (!response.ok) {
            throw new Error(
                "Network response was not ok " + response.statusText
            );
        }

        // parse the JSON data
        return await response.json();
    } catch (error) {
        console.error("Error fetching JSON:", error);
    }
}

async function mailStart() {
    const masterData = await fetchJSON("src/json/mail.json");

    appendOutput("Welcome to LMC (Liefje Mail Client)<br>use '");
    appendOutput("mail -h", "color1");
    appendOutput("' for help<br>'");
    appendOutput("mail -s [index]", "color1");
    appendOutput("' to open a mail.<br><br>");

    appendOutput("There are " + masterData.mail.length + " mails.<br>");
    for (let i = 0; i < masterData.mail.length; i++) {
        appendOutput(
            i +
                1 +
                ") " +
                masterData.mail[i].name +
                " | " +
                masterData.mail[i].date +
                "<br>"
        );
    }
}

async function mailShow(i) {
    const masterData = await fetchJSON("src/json/mail.json");
    console.log("real index: " + i);

    appendOutput(masterData.mail[i].name + "<br><br>");
    appendOutput(masterData.mail[i].text + "<br><br>");
    appendOutput(masterData.mail[i].date + "<br>");
}

function mailHelp() {
    appendOutput("mail [args] [index]", "color1");
    appendOutput(" - LMC (Liefje Mail Client)<br><br>");
    appendOutput("mail -s [index]", "color1");
    appendOutput(" - Show mail (select with index)<br><br>");
}
