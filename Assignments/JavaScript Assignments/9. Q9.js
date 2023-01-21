// 09. Boolean value is either true or false.
//     - Write three JavaScript statement example which provide truthy value.
//     - Write three JavaScript statement example which provide falsy value.

// Falsy Values

// 1. 0 //Zero
// 2. "" //Empty String
// 3. null
// 4. undefined
// 5. NaN //Not A Number
// 6. false

// This are all falsy values. Everything other than this are truthy values.

// Three statements of truthy values -
let myName = "Sayantan";
let age = 23;
let coder = true;

// Three statements of falsy values -
let newName = "";
let newAge = 0;
let newCoder = undefined;

const val = newAge; // Assign any of the above variable to val to determine either it is truthy or falsy value
if (val) {
  console.log("It is a truthy value");
} else {
  console.log("It is a falsy value");
}
