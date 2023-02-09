// Write a javascript programme to check whether the given string is blank or not.

const prompt = require("prompt-sync")({ sigint: true })

const isBlank = () => {
    const inp = prompt("Enter the string: ")
    inp.trim()
    if (inp.length == 0) {
        console.log("It is blank");
    } else {
        console.log("It is not blank");
    }
}


isBlank()