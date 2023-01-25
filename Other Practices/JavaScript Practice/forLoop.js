let a = 1

for (;a<=5;){               // IT IS NOT COMPULSORY TO WRITE THE WHOLE STATEMENT IN FOR LOOP, BUT IT IS A GOOD PRACTICE
    console.log("Hello");
    a++
}


let str = ""
for (let i=0; i<=5; i++){
    for (let j=0; j<=i; j++){
        str += "*"
    }
    str += "\n"
}
console.log(str);




