export default function buildImportStatement(relativePath: string, variableName: string,  moduleType: string = "module"): string{
    if(moduleType === "module") return `\nimport ${variableName} from "${relativePath}"`
    return 'error'
}