//% weight=100 color=#007ACC icon="\uf0e7"
namespace VariableStorage {
    // Store for variables
    let numberStorage: { [key: string]: number } = {};
    let stringStorage: { [key: string]: string } = {};
    let variableStorage: { [key: string]: any } = {};

    /**
     * Save a number to memory
     * @param name the name of the variable
     * @param value the value to be saved
     */
    //% block
    //% name.fieldEditor="text"
    //% name.defl="number"
    //% value.defl=0
    export function saveNumber(name: string, value: number): void {
        numberStorage[name] = value;
    }

    /**
     * Save a string to memory
     * @param name the name of the variable
     * @param value the string to be saved
     */
    //% block
    //% name.fieldEditor="text"
    //% name.defl="string"
    //% value.defl=""
    export function saveString(name: string, value: string): void {
        stringStorage[name] = value;
    }

    /**
     * Save a variable to memory
     * @param name the name of the variable
     * @param value the variable to be saved
     */
    //% block
    //% name.fieldEditor="text"
    //% name.defl="variable"
    //% value.defl=0
    export function saveVariable(name: string, value: any): void {
        variableStorage[name] = value;
    }

    /**
     * Retrieve a saved number
     * @param name the name of the variable
     * @returns the saved number or 0 if not found
     */
    //% block
    //% name.fieldEditor="text"
    //% name.defl="number"
    export function loadNumber(name: string): number {
        return numberStorage[name] || 0; // Default to 0
    }

    /**
     * Retrieve a saved string
     * @param name the name of the variable
     * @returns the saved string or empty string if not found
     */
    //% block
    //% name.fieldEditor="text"
    //% name.defl="string"
    export function loadString(name: string): string {
        return stringStorage[name] || ""; // Default to empty string
    }

    /**
     * Retrieve a saved variable
     * @param name the name of the variable
     * @returns the saved variable or undefined if not found
     */
    //% block
    //% name.fieldEditor="text"
    //% name.defl="variable"
    export function loadVariable(name: string): any {
        return variableStorage[name]; // Default to undefined
    }

    /**
     * Clear a saved number
     * @param name the name of the variable
     */
    //% block
    //% name.fieldEditor="text"
    //% name.defl="number"
    export function clearNumber(name: string): void {
        delete numberStorage[name];
    }

    /**
     * Clear a saved string
     * @param name the name of the variable
     */
    //% block
    //% name.fieldEditor="text"
    //% name.defl="string"
    export function clearString(name: string): void {
        delete stringStorage[name];
    }

    /**
     * Clear a saved variable
     * @param name the name of the variable
     */
    //% block
    //% name.fieldEditor="text"
    //% name.defl="variable"
    export function clearVariable(name: string): void {
        delete variableStorage[name];
    }

    /**
     * Clear all saved values
     */
    //% block
    export function clearAll(): void {
        numberStorage = {};
        stringStorage = {};
        variableStorage = {};
    }
}