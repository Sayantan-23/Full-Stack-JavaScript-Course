let x = "Pen"
let y = "Book"
let result1 = x > y      // COMPARING ASCII VALUES OF "PEN" AND "BOOK"
console.log(result1)

let p = "2"
let q = 1
let result2 = p > q     //CONVERTING STRING IN NUMBER
console.log(result2)


let a = 5
let b = "5"
let result3 = a == b    // IT WILL NOT CHECK THE TYPE OF THE VARIABLES. IT WILL CONVERT THE STRING INTO NUMBER BEFORE CHECKING
console.log(result3)   // THAT'S WHY WE SHOUD NEVER DO IT FOR COMPARING, WE SHOULD USE "===", IT WILL CHECK THE DATA AS WELL AS TYPE OF THE VARIABLE

let c = 5
let d = "5"
let result = c === d        //   """   //
console.log(result)


//below example is why using "==" for comparing is dangerous in javascript
let i = ""
let j = false
let result4 = i == j
console.log(result4)      // IT WILL GIVE THE OUTPUT TRUE BECAUSE IT WILL CONVERT THE EMPTY STRING INTO false
let result5 = i === j
console.log(result5)      // IT IS THE RIGHT WAY