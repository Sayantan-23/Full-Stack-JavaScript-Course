// 21. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

const countries = ["India", "France", "Germany", "Ethiopia", "USA", "Canada"];

if (countries.includes("Ethiopia")) {
  // console.log("ETHIOPIA");
  const index = countries.indexOf("Ethiopia");
  console.log(countries[index].toUpperCase());
} else {
  countries.push("Ethiopia");
  console.log(countries);
}
