import * as vscode from 'vscode'
import {relative} from 'path'

export default function getRelativeFilePath(openFile: vscode.TextDocument, uri: vscode.Uri): string {
    let openFileUri = openFile.uri
    let relativePath = relative(openFileUri.path, uri.path)
    console.log("relative path " + relativePath)
    return relativePath
}