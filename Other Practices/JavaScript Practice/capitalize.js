// Write a JavaScript function to capitalize the first letter of a string. Go to the editor
// Test Data :
// console.log(capitalize('js string exercises'));
// "Js string exercises"

const prompt = require("prompt-sync")({ sigint: true })

const capitalize = () => {
    const str = prompt("Enter the string: ")
    return str.charAt(0).toUpperCase() + str.slice(1)
}

console.log(capitalize());