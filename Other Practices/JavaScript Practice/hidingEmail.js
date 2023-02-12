// Write a JavaScript function to hide email addresses to protect from unauthorized user. Go to the editor
// Test Data :
// console.log(protect_email("robin_singh@example.com"));
// "robin...@example.com"

const prompt = require("prompt-sync")({ sigint: true })

const emailHide = () => {
    const email = prompt("Enter your email: ")

    const arr = email.split("@")
    const str = arr[0]

    const len = Math.floor(str.length / 2)
    let newStr = ""
    for (let i = 0; i < len; i++) {
        newStr+=str.charAt(i)
    }

    console.log(newStr+ "...@"+ arr[arr.length - 1]);
}

emailHide()