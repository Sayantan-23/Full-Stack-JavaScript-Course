// 08. Demonstrate the use of trim() to remove any trailing whitespace at the beginning and the end of a string.

const myName = "    Sayantan    ";
console.log(myName.length); //With spaces

const newName = myName.trim();

console.log(newName.length); //Without spaces
