async function su(userinput) {
    const masterData = await fetchJSON("src/json/users.json");
    // console.log(masterData);

    for (const user of masterData.users) {
        const { username } = user;
        // console.log(username);
        // console.log(correctPassword);

        if (username === userinput) {
            const { correctPassword } = user;
            setUsername(username);
            loginPassword(correctPassword);
            return;
        }
    }
    appendOutput("No user with this username<br>");
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
