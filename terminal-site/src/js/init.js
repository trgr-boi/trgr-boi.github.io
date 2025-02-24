"use strict";

// Elements
var outputDiv = document.getElementById("output"),
    inputField = document.getElementById("command-input"),
    usernamefield = document.getElementById("user");
// Username
let username;
// History
var commandHistory = [];
var historyIndex = -1;

window.onload = function () {
    setUsername("guest");
};

function setUsername(newUsername) {
    username = newUsername;
    usernamefield.innerHTML = username;
}

document.body.addEventListener("click", function () {
    var textarea = document.getElementById("command-input");
    textarea.focus();
});

window.addEventListener("DOMContentLoaded", function () {
    var textarea = document.getElementById("command-input");
    textarea.focus();
    startText();
});

inputField.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        var command = inputField.value;
        inputField.value = "";
        executeCommand(command);
    } else if (event.key === "ArrowUp") {
        navigateCommandHistory(-1);
    } else if (event.key === "ArrowDown") {
        navigateCommandHistory(1);
    }
});

function appendOutput(output, className) {
    outputDiv.innerHTML +=
        '<span class="' + className + '">' + output + "</span>";
    outputDiv.scrollTop = outputDiv.scrollHeight;
}

function navigateCommandHistory(offset) {
    var newIndex = historyIndex + offset;
    if (newIndex >= 0 && newIndex < commandHistory.length) {
        historyIndex = newIndex;
        inputField.value = commandHistory[historyIndex];
    }
}

function executeCommand(command) {
    appendOutput(">&nbsp" + username + "@terminal.OS: $&nbsp", "color3");
    appendOutput(command + "<br>");
    commandHistory.push(command);
    historyIndex = commandHistory.length;
    handleCommand(command);
}

function startText() {
    appendOutput(
        `<pre class="color1">
 _____     _   _ _       _         _
|   __|_ _| |_| |_|_____|_|___ ___| |  ___ ___
|__   | | | . | | |     | |   | .'| |_| . |_ -|
|_____|___|___|_|_|_|_|_|_|_|_|__,|_|_|___|___|
</pre>`
    );
    appendOutput(
        "<span>Welcome to Subliminal.OS. You are logged in as 'guest'.<br>Type </span>"
    );
    appendOutput("<span>help", "color1");
    appendOutput(" to get started.</span><br><br>");
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
