var correctPassword;

function su(user) {
    switch (user) {
        case "tuur":
            suTuur();
            break;
        case "liefje":
            suLiefje();
            break;
        case "azerty":
            suAzerty();
            break;
        default:
            appendOutput("Unknown user: " + user + "<br>");
    }
}
function suTuur() {
    setUsername("tuur");
    correctPassword = "test";
    loginPassword(correctPassword);
}

function suLiefje() {
    setUsername("liefje");
    correctPassword = "Miss-Phawa";
    loginPassword(correctPassword);
}
function suAzerty() {
    setUsername("azerty");
    correctPassword = "qwerty";
    loginPassword(correctPassword);
}

function suLogout() {
    appendOutput("Logging out of " + username + "<br>");
    setUsername("guest");
}

function loginPassword(correctPassword) {
    let userInput = prompt("Give password for " + username);
    if (userInput === correctPassword) {
        loginSucces();
    } else {
        appendOutput("Password incorrect.<br>");
        setUsername("guest");
    }
    return userInput;
}

function loginSucces() {
    appendOutput("Password correct!<br>");
    appendOutput("You are now logged in as '" + username + "'<br>");
    appendOutput("For personal help: Type '");
    appendOutput("help -p", "color1");
    appendOutput("'<br>");
}
