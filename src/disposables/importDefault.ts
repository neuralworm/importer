import * as vscode from 'vscode';

export default vscode.commands.registerCommand('importer.importDefault', () => {
    // The code you place here will be executed every time your command is executed
    // Display a message box to the user
    vscode.window.showInformationMessage('Default Import');
});