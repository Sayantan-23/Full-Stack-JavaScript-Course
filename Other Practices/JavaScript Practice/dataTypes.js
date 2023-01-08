/*                      DATA TYPES
                            |
                PRIMITIVE        OBJECT
                    |               |
                Number       
                String
                Boolean
                Null
                Undefined
                Symbol

    IN NUMBER WE HAVE SUB TYPES LIKE -- BigInt, infinity, -infinity
*/
let num1 = 5
let userName = 'Sayantan'
let num2 = 4.5

console.log(typeof num1, typeof userName, typeof num2, typeof x)    //x is not defined

let num3 = 6545434784654687654546845464n               // BigInt
console.log(num3 + 2n)

let num4 = 2e5                  // e5 = 10^5
console.log(num4)

console.log(num1 / userName)
console.log(typeof (6/"me"))

let num5 = 0xff         // HEXADECIMAL NUMBER
console.log(num5, typeof num5)