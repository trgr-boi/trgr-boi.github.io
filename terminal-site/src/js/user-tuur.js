function commandsTuur(command) {

    if (command === 'help -p') { showHelpTuur(); } 
    else { unknownCommand(command); }
    
}
 
function showHelpTuur() {
    appendOutput('test succesfull!<br>')
}