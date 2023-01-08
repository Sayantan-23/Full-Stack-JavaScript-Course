let num1 = true
let num2 = true
let result = num1 + num2     //THE " + " OPERATOR CONVERTS THE BOOLEAN VALUES INTO NUMBERS. SO FOR true IT WILL BE 1 AND FOR false IT WILL BE 0
console.log(result)

let num = 5
//num = num + 2
num += 2        // "+=" is a shorthand operator

console.log(num)

//num = num + 1
//num += 1
num++    //post increment   //WE CAN ALSO USE IS "++"
console.log(num)
++num     // pre increment
console.log(num)

--num      // pre decrement
console.log(num)
num--      // post decrement
console.log(num)


let num5 = 4
let x = num5++
console.log(x, num5)

let num6 = 4
let y = ++num6
console.log(y, num6)


console.log(Math.pow(4,3))        // -- IT MEANS 4^3
console.log(4**3)


//THERE ARE LOGICAL OPERATORS AND, OR and NOT
// AND -- &
// OR -- |
// NOT -- !

let a = 5, b = 7, c = 8

let result2 = a > b && b < c
console.log(result2)

let result3 = a > b || b < c
n = !result3
console.log(result3, n)