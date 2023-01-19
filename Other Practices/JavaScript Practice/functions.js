function programmer(user) {
    console.log(num)        // HOISTING
    return `Hello ${user}`
}
let num = 5                 //GLOBAL VARIABLE
let userName = "Sayantan"
let str = programmer(userName)

console.log(str)

let add = function(num1, num2)          //ANNONYMOUS FUNCTION ASSIGNED TO A VARIABLE
        {                               //JAVASCRIPT TREATS FUNCTION AS OBJECTS
            return num1 + num2
        }
        
let sum = add

let result = sum(4,5)

console.log(result);
console.log(sum);



function multiply(num1, num2, num3 = 1){
    console.log(num1, num2, num3)
    return num1*num2*num3
}
let result1 = multiply(5,6,3)
let result2 = multiply(4,5)

console.log(result1);
console.log(result2);


//ARROW FUNCTION
let addition = (num1, num2) => Math.abs(num1) + Math.abs(num2)

let result3 = addition(-6,-4)
console.log(result3)