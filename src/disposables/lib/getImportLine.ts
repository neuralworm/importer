import * as vscode from 'vscode'
export default function getLastImportLine(file: string[]): number {
    let currentline = 0
    file.forEach((lineString, index)=> {
        //  get first word
        if(lineString.split(" ")[0] === "import"){
            console.log("Line " + index + "contains import.")
            currentline += 1
        }
        
    })
    return currentline + 1
}