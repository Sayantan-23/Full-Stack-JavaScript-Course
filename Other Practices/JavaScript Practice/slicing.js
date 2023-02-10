// Write a javascript programme to extract specified number of characters from a string

const prompt = require("prompt-sync")({ sigint: true })

const sliceString = () => {
    const str = prompt("Enter the string: ")
    const numOfCharacters = prompt("Enter the number of characters to be extracted: ")

    return str.slice(0,numOfCharacters)
}

console.log(sliceString());