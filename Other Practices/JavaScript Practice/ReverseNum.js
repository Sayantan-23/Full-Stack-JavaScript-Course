let num1 = 542634
let num2
let str = ""
while (num1 > 0){
    num2 = num1 % 10
    num1 = parseInt(num1 / 10)
    str += String(num2)
}
console.log(str);