function fibonacci(num) {
    if (num < 0)
        return 'Wrong input';
    else if (num === 0)
        return 0;
    else if ((num === 1) || (num === 2)) 
        return 1;
    else if (num > 2)
        return fibonacci(num - 1) + fibonacci(num - 2);
}

let num = 0;
let terms = 5;

while (num < terms){
    console.log(fibonacci(num));
    num++;
}