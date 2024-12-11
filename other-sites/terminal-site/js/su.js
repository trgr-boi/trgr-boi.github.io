var correctPassword;

function suTuur() {
    setUsername("tuur");
    correctPassword = "test"
    loginPassword(correctPassword);
}

function suLiefje() {
    setUsername("liefje");
    correctPassword = ""
    loginPassword(correctPassword);
}

function suLogout() {
    appendOutput("Logging out of " + username + "<br>")
    setUsername("guest");
}

function loginPassword(correctPassword) {
    let userInput = prompt("Give password for " + username);
    if (userInput === correctPassword) { loginSucces(); }
    else { 
        appendOutput("Password incorrect.<br>");
        setUsername("guest"); 
    }
    return userInput;
}

function loginSucces() {
    appendOutput("Password correct!<br>");
    appendOutput("You are now logged in as '" + username + "'<br>");
    appendOutput("For personal help: Type '");
    appendOutput("help -p", 'color1');
    appendOutput("'<br>");
}