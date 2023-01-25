let num = 5;
let fact = 1;

if (num===0){
    fact = 1
}
else{
    for (let i = 2;i<=num; i++){
        fact = fact*i
    }   
}
console.log(fact);





// function factorial(num) {
//     if (num===0)
//         return 1;
//     else
//         return num * factorial(num-1);
// }

// let result = factorial(5)
// console.log(result);