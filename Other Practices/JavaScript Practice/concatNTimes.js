// Write a JavaScript function to concatenates a given string n times (default is 1). Go to the editor
// Test Data :
// console.log(repeat('Ha!'));
// console.log(repeat('Ha!',2));
// console.log(repeat('Ha!',3));
// "Ha!"
// "Ha!Ha!"
// "Ha!Ha!Ha!"

const prompt = require("prompt-sync")({ sigint: true })

const repeatString = () => {
    const str = prompt("Enter the string: ")
    const repetition = prompt("Enter how many times to repeat: ")
    
    console.log(str.repeat(repetition));
}

repeatString()