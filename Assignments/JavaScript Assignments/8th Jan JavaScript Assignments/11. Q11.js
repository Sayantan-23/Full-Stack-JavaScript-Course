// 11. Use the Date object to do the following activities
//     - What is the year today?
//     - What is the month today as a number?
//     - What is the date today?
//     - What is the day today as a number?
//     - What is the hours now?
//     - What is the minutes now?
//     - Find out the numbers of seconds elapsed from January 1, 1970 to now.

const date = new Date();

console.log(`What is the year today? - ${date.getFullYear()}`);
console.log(`What is the month today as a number? - ${date.getMonth()}`);
console.log(`What is the date today? - ${date.getDate()}`);
console.log(`What is the day today as a number? - ${date.getDay()}`);
console.log(`What is the hours now? - ${date.getHours()}`);
console.log(`What is the minutes now? - ${date.getMinutes()}`);

const newDate = new Date("1970-01-01T00:00:00Z");

// console.log(
//   `Find out the numbers of seconds elapsed from January 1, 1970 to now. - ${
//     date - newDate
//   }`
// );
console.log(
  `Find out the numbers of seconds elapsed from January 1, 1970 to now. - ${
    date.getTime() - newDate.getTime() / 1000
  }`
);
