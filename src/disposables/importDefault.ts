import * as vscode from 'vscode';
import buildImportStatement from './lib/buildImportStatement';
import getFileLineArray from './lib/getFile';
import getLineToImportAt from './lib/getImportLine';
import getRelativeFilePath from './lib/getRelativeFilePath';

export default vscode.commands.registerCommand('importer.importDefault', (uri: vscode.Uri) => {
    let activeEditor = vscode.window.activeTextEditor
    if(!activeEditor) return
    // get file name without full path

    console.log(uri.fsPath)
    let fileName: string = uri.fsPath.split('\\')[uri.fsPath.split('\\').length - 1].split('.')[0]
    vscode.window.showInputBox({
        title: "Enter Import Name",
        value: fileName
    }).then(()=>{
        // CHECK IF ALREADY IMPORTED


        // IMPORT
        vscode.window.showInformationMessage("IMPORTED")
        let fileArray: string[] = getFileLineArray(vscode.window.activeTextEditor!)
        console.log(fileArray)
        //  get last line of current imports
        let importLine: number = getLineToImportAt(fileArray)
        console.log("Inserting import at line " + importLine)
        let relativePath = getRelativeFilePath(vscode.window.activeTextEditor?.document!, uri)
        let importStatementString = buildImportStatement(relativePath, fileName, "module")
        activeEditor!.edit((edit)=>{
            edit.insert(new vscode.Position(importLine, 0), importStatementString)
        })
    })
});