function commandsLiefje(command) {
    if (command === "help -p") {
        showHelpLiefje();
    } else if (command === "liefje-zien") {
        showCountdown();
    } else if (command.startsWith("mail")) {
        commandsMail(command);
    } else {
        unknownCommand(command);
    }
}

function showHelpLiefje() {
    appendOutput("Available commands:<br>");
    appendOutput("liefje-zien", "color1");
    appendOutput(" - Countdown until happiness v2.<br>");
    appendOutput("mail", "color1");
    appendOutput(" - start LMC mail client <br>");
}

function showCountdown() {
    const targetDate = new Date(2025, 3, 18);
    const currentDate = new Date();

    // Calculate the difference in days
    const timeDiff = targetDate.getTime() - currentDate.getTime();

    const daysRemaining = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

    if (daysRemaining <= 0) {
        appendOutput("The target date has already passed or is today!<br>");
    } else {
        appendOutput(`Nog ${daysRemaining} dagen en ik zie liefje!!!<br>`);
        appendOutput("Dit klopt niet maar snap niet waarom :(");
    }
}
