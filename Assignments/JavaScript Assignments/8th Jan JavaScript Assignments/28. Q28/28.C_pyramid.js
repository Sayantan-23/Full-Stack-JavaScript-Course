// c. Print a pyramid pattern, if the input is 3 then the output should be similar to the given output
// 	     *
// 	    ***
//     *****

const prompt = require("prompt-sync")({ sigint: true });

const pyramidPattern = () => {
  const height = prompt("Enter the height of the pyramid: ");

  let spaces = height - 1;
  let star = 1;

  for (let i = 1; i <= height; i++) {
    for (let j = 0; j <= spaces; j++) {
      process.stdout.write(" ");
    }

    for (let j = 1; j <= star; j++) {
      process.stdout.write("*");
    }

    console.log();

    spaces--;
    star += 2;
  }

  //Small code
  // for (let i = 1; i <= height; i++) {
  //     console.log(`${" ".repeat(height-1-i)}*`.repeat(1+2*i));  // first line i=0, so prints height-1 spaces and 1 star.
  // }                                              // after that total spaces and total stars are calculated and repeated.
};
pyramidPattern();
