// function whosPaying(names) {

//     return names[Math.floor(Math.random() * (names.length))];

// }

// console.log(whosPaying(["Angela", "Ben", "Jenny", "Michael", "Chloe"]))

// function fibonacciGenerator (n) {

//         var output = [0,1];

//         if (n===1){
//             return [output[0]];
//         }
//         else if(n===2){
//             return output;
//         }
//         else {
//             for (var i=2; i<n; i++){
//                 var temp = output[output.length - 2] + output[output.length - 1];
//                 output.push(temp);
//             }
//             return output;
//         }
// }

// console.log(fibonacciGenerator(5));

// function add(a, b)
//     let temp = a + b;
//     console.log(temp);

// add(5,6)

// a = [5,6,4,10];

// for (let i in Range(a.length)){
//     console.log(a[i]);
// }

// arr = [4,5,3,8];
// console.log(arr.pop(4));
// console.log(arr);

// function sumOfAll() {
//     let sum = 0;
//     for (let i =0; i<arguments.length; i++){
//         sum = sum + arguments.i;
//         console.log(i);
//     }
//     console.log(sum);
// }

// sumOfAll(4,2,6);

// let args = {
//     1:4,
//     name:2,
//     3:6
// }

// console.log(args[1]);
// console.log(args.name);

// (() => {                // ANONYMUS FUNCTION, SELF INVOKED FUNCTION //
//     console.log("hello world");
// })();

// "use strict";
// const prompt = require("prompt-sync")({sigint:true});

// let x = parseInt(prompt("Enter the number : "));
// console.log(typeof x);

// let array = [1, true, 'Sayantan', 4.5, undefined, null];
// console.log(array);

let obj = {
  1: "sayantan",
  key: "Ghosh",
};

console.log(obj[1]);
console.log(obj.key);
