// 	a. Print a triangle pattern, if the given input is 3 then the pattern should be similar to the given output
// 	   *
// 	   **
// 	   ***
	


const prompt = require("prompt-sync")({ sigint: true })

const trianglePattern = () => {
    const height = prompt("Enter the height of the triangle: ")

    // for (let i = 1; i <= height; i++){
    //     for (let j = 0; j < i; j++) {
    //         process.stdout.write("*");
    //     }
    //     console.log();
    // }

    for (let i = 1; i <= height; i++) {
        console.log("*".repeat(i));
    }
}

trianglePattern()