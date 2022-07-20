import * as vscode from 'vscode';
import getFileLineArray from './lib/getFile';
import getLineToImportAt from './lib/getImportLine';

export default vscode.commands.registerCommand('importer.importDefault', () => {
    // The code you place here will be executed every time your command is executed
    // Display a message box to the user
    vscode.window.showInputBox({
        title: "Enter Import Name",
        value: "FILE_NAME"
    }).then(()=>{
        vscode.window.showInformationMessage("IMPORTED")
        let fileArray: string[] = getFileLineArray(vscode.window.activeTextEditor!)
        console.log(fileArray)
        //  get last line of current imports
        let importLine: number = getLineToImportAt(fileArray)
        console.log("Inserting import at line " + importLine)
    })
});