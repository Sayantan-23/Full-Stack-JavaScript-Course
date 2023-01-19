let data = [22,45,68,75,36,57,63,81,92];

let result = data.filter(values => values%2 === 0)
                .map(value => value*3)
                .reduce((num1,num2) => num1*num2)

console.log(result);
    
    // .forEach(value => {
    //     console.log(value);
    // })