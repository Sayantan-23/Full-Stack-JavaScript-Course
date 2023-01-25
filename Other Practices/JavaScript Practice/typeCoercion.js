let x
console.log(x, typeof x)                    ////JAVASCRIPT TRY TO CONVERT DATA TYPES INTO IT'S OWN WAY

x = 5
x = x + ""
console.log(x, typeof x)

x = x - 2
console.log(x, typeof x)

x = +x + 2
console.log(x, typeof x)

x = !x      //not operator
console.log(x, typeof x)

let y = parseInt("7003 Sayantan")
console.log(y)

console.log(Boolean(10)) // ANY NUMBER EXCEPT 0 IS TRUE      //TRUTHY VALUE

//BELOW EVERYTHING IS FALSE             //FALSY VALUE
// console.log(Boolean(0))
// console.log(Boolean(-0))
// console.log(Boolean(BigInt(0)))
// console.log(Boolean(0n))
// console.log(Boolean(""))   // ONLY EMPTY STRING IS FALSE
// console.log(Boolean(undefined))
// console.log(Boolean(null))
// console.log(Boolean(NaN))
// console.log(Boolean(false))
