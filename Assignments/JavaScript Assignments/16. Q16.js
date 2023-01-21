// 16. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
//     - September, October or November, the season is Autumn.
//     - December, January or February, the season is Winter.
//     - March, April or May, the season is Spring
//     - June, July or August, the season is Summer

const prompt = require("prompt-sync")({ sigint: true });

const month = prompt("Enter the month: ").toLowerCase();

switch (month) {
  case "september":
  case "october":
  case "november":
    console.log(`This is Autumn season`);
    break;
  case "december":
  case "january":
  case "february":
    console.log(`This is Winter season`);
    break;
  case "march":
  case "april":
  case "may":
    console.log(`This is Spring season`);
    break;
  case "june":
  case "july":
  case "august":
    console.log(`This is Summer season`);
    break;
  default:
    console.log(`Please Enter a correct name of the month`);
    break;
}
