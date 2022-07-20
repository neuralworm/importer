import * as vscode from 'vscode'
export default function getFile(file: vscode.TextEditor): string[]{
    let filetext = file.document
    let lines = filetext.getText().split("\n")
    return lines
}